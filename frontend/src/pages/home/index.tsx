import { useEffect, useState } from 'react'
import { getLocation, getWeather } from 'redux/slices/weather'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/store/store'
import { Button, Input } from 'components/index'
import { Container } from 'style/style-components/components/container'
import { Box1, Box2 } from 'style/style-components/components/box'
import { GregorianToJalali } from 'utils/func'
import moment from 'moment'
const Index: React.FC = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.weather)
  const [city, setCity] = useState<string>('')
  const [select, setSelect] = useState<string>('')

  const Onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value)
  }
  const OnClick = () => {
    if (city.length > 1) {
      dispatch(getLocation(city))
    }
  }
  const GetWeather = async (woeid: number, select: string) => {
    setSelect(select)
    dispatch(getWeather(woeid))
  }

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-start'>
        <div>
          <div className='d-flex'>
            <Input
              value={city}
              setData={setCity}
              width='300px'
              height='46px'
              radius='0'
              placeholder='Search...'
              onChange={Onchange}
            />
            <Button title='search' width='100px' radius='0' onClick={OnClick} />
          </div>
          <div>
            {state.loading2 ? (
              <Box1 border='none'>Loading...</Box1>
            ) : (
              state.weather?.map((weather, index) => (
                <>
                  <span>
                    Last update at {GregorianToJalali(weather.created)}
                  </span>
                  <Box2 key={index}>
                    <div className='top'>
                      <img
                        src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
                        alt={weather.weather_state_abbr}
                      />
                      <h4>{weather.weather_state_name}</h4>
                    </div>
                    <div className='bottom'>
                      <span>Max : {weather.max_temp.toFixed()} C</span>
                      <span>Min : {weather.min_temp.toFixed()} C</span>
                    </div>
                  </Box2>
                </>
              ))
            )}
          </div>
        </div>
        <div>
          {state.loading1 ? (
            <Box1 border='none'>Loading...</Box1>
          ) : state.cities?.length ? (
            state.cities?.map((city, index) => (
              <Box1
                active={city.title === select}
                onClick={() => GetWeather(city.woeid, city.title)}
                key={index}
              >
                {city.title}
              </Box1>
            ))
          ) : (
            <Box1 border='none'>Nothing</Box1>
          )}
        </div>
      </div>
    </Container>
  )
}
export default Index
