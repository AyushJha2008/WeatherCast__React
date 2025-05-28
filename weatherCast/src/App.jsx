import React from 'react'

const App = () => {
  return (
    <div className='cont'>
      <div className="search-sectn">
        <form action="#"className='search-form'>

          <img className="searchSymbol" src='/src/assets/search.png' />
          <input type="search" placeholder="Enter City name" required className="search-input" />
        </form>
        <button className="location"><img src="/src/assets/location.png" alt="" /></button>
      </div>

      <div className="weatherSecn">
        <div className="current-weather">
          <img src='/src/assets/cloudy.png' className="weather-icon" />
          <h2 className="temp">20 <span>°C</span></h2>
          <p className="desc">Partly Cloudy</p>
        </div>
        <div className="hourly-cast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" className="weather-icon" />
              <p className="temp">20°C</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App