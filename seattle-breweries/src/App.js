import React, { useEffect, useState } from 'react'
import './App.css';
import BreweryCard from './components/BreweryCard';
import Navigation from './components/Navigation'

function App() {
  const [chosenBrewery, setChosenBrewery] = useState(0)
  const [breweries, setBreweries] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/breweries/')
      .then(r => r.json())
      .then(d => {
          setBreweries(d)
      })
  }, [])

  const getBreweryInfo = () => {
    return breweries.find(brewery => brewery.id === chosenBrewery)
  }

  return (
    <div className="App">
      <Navigation setChosenBrewery={setChosenBrewery} chosenBrewery={chosenBrewery} breweries={breweries}/>
      {parseInt(chosenBrewery, 10) !== 0 ? <BreweryCard brewery={getBreweryInfo()} /> : null}
    </div>
  );
}

export default App;
