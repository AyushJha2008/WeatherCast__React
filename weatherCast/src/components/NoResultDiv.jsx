const NoResultDiv = () => {
  return (
    <div className="no-result">
        <img src="./src/assets/no-result.png" />
        <h3>SOMETHING WENT WRONG</h3>
        <p>We're unable to fetch the weather details. Ensure you've entered a valid city or try again later.</p>
    </div>
  )
}

export default NoResultDiv