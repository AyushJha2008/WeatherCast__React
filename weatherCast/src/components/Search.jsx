const Search = ({getWeather}) => {
// search handle
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCity = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`
    getWeather(API_URL)
    }
  return (
    <div className="search-sectn">
        <form className='search-form' onSubmit={handleCity}>
          <img className="searchSymbol" src='/src/assets/search.png' />
          <input type="search" placeholder="Enter City name" required className="search-input" />
        </form>
        <button className="location"><img src="/src/assets/location.png" alt="" /></button>
      </div>
  )
}

export default Search