import { useEffect, useRef, useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import Search from "./components/Search.jsx";
import { weatherCodes } from "./constant.js";
import NoResultDiv from "./components/noResultDiv.jsx";

const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const [currentWeather, setCurrentWeather] = useState({})
  const [hourlyForecast, setHourlyForecast] = useState([])
  const searchInputref = useRef(null);
  const [noResult, setNoResult] = useState(false)

  const getWeather = async (API_URL) =>{
    setNoResult(false)
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      if(!response.ok) throw new Error()
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({temperature, description, weatherIcon})
      console.log(data);
      const combinedHourData = [...data.forecast.forecastday[0].hour]
      searchInputref.current.value = data.location.name
      setHourlyForecast(combinedHourData)
    }catch (error){
      setNoResult(true)
    }
  }

  useEffect(()=>{
    const defaultCity = "Mumbai"
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${defaultCity}&days=2`
    getWeather(API_URL)
  },[])

  return (
    <div className='cont'>
      <Search getWeather={getWeather} searchInputref = {searchInputref} />
      {noResult?(
        <NoResultDiv/>
      ):(
        <div className="weatherSecn">
        <CurrentWeather currentWeather = {currentWeather}/>
        
        <div className="hourly-cast">
          <ul className="weather-list">
            {hourlyForecast.map((hourData, index) =>(
              <HourlyWeather key={hourData.time_epoch || index} hourData = {hourData}/>
            ))}
          </ul>
        </div>
      </div>
      )}

    </div>
  )
}

export default App