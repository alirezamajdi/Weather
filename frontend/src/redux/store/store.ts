import { configureStore } from '@reduxjs/toolkit'
import toast from 'redux/middleware/toast'
import weatherReducer from '../slices/weather'

const Reducers = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(toast),
})
export type RootState = ReturnType<typeof Reducers.getState>
export default Reducers
