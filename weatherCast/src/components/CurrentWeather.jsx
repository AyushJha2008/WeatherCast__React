
const CurrentWeather = ({currentWeather}) => {
  if (!currentWeather) return null
  return (
    <div className="current-weather">
          <img src={`/src/assets/${currentWeather.weatherIcon}.png`} className="weather-icon" />
          <h2 className="temp">{currentWeather.temperature}<span>°C</span></h2>
          <p className="desc">{currentWeather.description}</p>
        </div>
  )
}

export default CurrentWeather