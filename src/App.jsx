import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Weather from './components/Weather'
import Loader from './components/Loader'


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  
  const handleSubmmit = (e) => { 
    e.preventDefault()
    const city = e.target.city.value
    const KEY = '6ad50d7a14403354d3d83d4d8490764a'

    const URL_COUNTRY = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`
    
    axios.get(URL_COUNTRY)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }

  const success = (pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = '6ad50d7a14403354d3d83d4d8490764a'

    
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
      .then(({ data }) => setWeatherInfo(data))
      .catch((err) => console.log(err))
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])

  return (
    <main className='fondo  min-h-screen text-white flex flex-wrap flex-col items-center justify-around justify-items-center bg-backgclima'>
      {/* weatherinfo */}
      
      {
        weatherInfo ? <Weather weatherInfo={weatherInfo} handleSubmmit={handleSubmmit} /> : <Loader />
      }

    

    </main>
  )
}

export default App
