import { weatherCodes } from "../constant"
const HourlyWeather = ({hourData}) => {
  const temperature = Math.floor(hourData.temp_c)
  const time = hourData.time.split(" ")[1].substring(0,5);
  const weatherIcon = Object.keys(weatherCodes).find(icon => weatherCodes[icon].includes(hourData.condition.code))
  
  return (
    <li className="weather-item">
        <p className="time">{time}</p>
        <img src={`src/assets/${weatherIcon}.png`} className="weather-icon" />
        <p className="temp">{temperature}°C</p>
    </li>
  )
}

export default HourlyWeather