import React from 'react'

const App = () => {
  return (
    <div className='cont'>
      <div className="search-sectn">
        <form action="#"className='seach-fom'>
          <span className="searchSymbol">🔎</span>
          <input type="search" placeholder="Enter City name" required className="search-input" />
        </form>
        <button className="location">🧭</button>
      </div>

      <div className="weatherSecn">
        <div className="currentWeather">
          <img src='/src/assets/cloudy.png' className="weather-icon" />
          <h2 className="temp">20 <span>°C</span></h2>
          <p className="desc">Partly Cloudy</p>
        </div>
        <div className="hourly-cast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="src/assets/cloudy.png" alt="" />
              <p className="temp"></p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default App