import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import http from 'services/http'
import { error } from 'utils/toast'

export const getLocation = createAsyncThunk(
  'post/getLocation',
  async (title: string) => {
    const res = await http.post('/location', { title })
    return res.data
  }
)

export const getWeather = createAsyncThunk(
  'post/getWeather',
  async (woeid: number) => {
    const res = await http.post('/weather', { woeid })
    return res.data
  }
)
interface Cities {
  title: string
  location_type: string
  woeid: number
  latt_long: string
}

interface Weather {
  air_pressure: number
  applicable_date: string
  created: string
  humidity: number
  id: number
  max_temp: number
  min_temp: number
  predictability: number
  the_temp: number
  visibility: number
  weather_state_abbr: string
  weather_state_name: string
  wind_direction: number
  wind_direction_compass: string
  wind_speed: number
}
interface InitialState {
  cities: Cities[]
  weather: Weather[]
  loading1: boolean
  loading2: boolean
  error: null
}
const initialState: InitialState = {
  cities: [],
  weather: [],
  loading1: false,
  loading2: false,
  error: null,
}
const weatherSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.cities = action.payload
      state.loading1 = false
    })

    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.weather = action.payload
      state.loading2 = false
    })

    builder.addCase(getLocation.pending, (state, { payload }) => {
      state.loading1 = true
    })

    builder.addCase(getWeather.pending, (state, { payload }) => {
      state.loading2 = true
    })

    builder.addCase(getLocation.rejected, (state, action) => {
      state.error = action.error as any
      error(action.error.message)
      state.loading1 = false
    })

    builder.addCase(getWeather.rejected, (state, action) => {
      state.error = action.error as any
      error(action.error.message)
      state.loading2 = false
    })
  },
})

export default weatherSlice.reducer
