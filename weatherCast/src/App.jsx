import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import Search from "./components/Search.jsx";
import { weatherCodes } from "./constant.js";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState()

  const getWeather = async (API_URL) =>{
    try{
      const response = await fetch(API_URL);
      const data = await response.json();
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(data.current.condition.code))

      setCurrentWeather({temperature, description, weatherIcon})
      console.log(data);
    }catch (error){
      console.log(error);
    }
  }
  return (
    <div className='cont'>
      <Search getWeather={getWeather} />

      <div className="weatherSecn">
        <CurrentWeather currentWeather = {currentWeather}/>
        
        <div className="hourly-cast">
          <ul className="weather-list">
            <HourlyWeather/>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App