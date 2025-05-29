import React from 'react'

const HourlyWeather = () => {
  return (
    <li className="weather-item">
        <p className="time">00:00</p>
        <img src="src/assets/clouds.png" className="weather-icon" />
        <p className="temp">20°C</p>
    </li>
  )
}

export default HourlyWeather