const Search = ({getWeather, searchInputref}) => {
// search handle
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCity = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`
    getWeather(API_URL)
    };

    const handleLocatn = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const {latitude, longitude} = position.coords;
          const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}`; 
          getWeather(API_URL);
        },
        () => {
          alert("location access denied, please enable permission")
        }
      )
    }

  return (
    <div className="search-sectn">
        <form action="#" className='search-form' onSubmit={handleCity}>
          <img className="searchSymbol" src='/src/assets/search.png' />
          <input type="search" ref={searchInputref} placeholder="Enter City name" required className="search-input" />
        </form>
        <button onClick={handleLocatn} className="location"><img src="/src/assets/location.png" alt="" /></button>
      </div>
  )
}

export default Search