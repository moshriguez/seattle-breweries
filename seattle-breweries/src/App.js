import React, { useEffect, useState } from 'react'
import './App.css';
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

  return (
    <div className="App">
      <Navigation setChosenBrewery={setChosenBrewery} chosenBrewery={chosenBrewery} breweries={breweries}/>
    </div>
  );
}

export default App;
