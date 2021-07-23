import React from 'react'

const beerMugPath = "m19.5 9.5c-.514 0-1.016-.078-1.5-.216v8.716c0 .552-.447 1-1 1s-1-.448-1-1v-8.363c-.636.229-1.308.363-2 .363s-1.364-.134-2-.363v8.363c0 .552-.447 1-1 1s-1-.448-1-1v-8.716c-.484.138-.986.216-1.5.216-.813 0-1.583-.182-2.278-.5h-2.222c-1.654 0-3 1.346-3 3v5c0 1.654 1.346 3 3 3h2c0 2.209 1.791 4 4 4h8c2.209 0 4-1.791 4-4v-11h-.222c-.695.318-1.465.5-2.278.5zm-13.5 8.5h-2c-.552 0-1-.449-1-1v-5c0-.551.448-1 1-1h2zm2.5-10.5c.94 0 1.79-.375 2.418-.979.734.896 1.834 1.479 3.082 1.479s2.348-.583 3.082-1.479c.628.604 1.478.979 2.418.979 1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5c-.94 0-1.79.375-2.418.979-.734-.896-1.834-1.479-3.082-1.479s-2.348.583-3.082 1.479c-.628-.604-1.478-.979-2.418-.979-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5z"

const Navigation = ({breweries, chosenBrewery, setChosenBrewery}) => {
    
    const handleChange = (e) => {
        setChosenBrewery(e.target.value)
    }
    const renderOptions = () => {
        return (
            <>
            {breweries.map(brewery => {
                return <option value={brewery.id} key={brewery.id}>{brewery.name}</option>
            })}
            </>
        )
    }
    return (
        <header>
            {/* <img src={beerMugIcon} alt='beer-icon' id='beer-icon'/>
            <img src={beerMugIcon} alt='beer-mirror-icon' id='beer-mirror-icon'/> */}
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" className="beer-icon">
                <path d={beerMugPath}/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" className="beer-icon-mirror">
                <path d={beerMugPath}/>
            </svg>
            <h1>Breweries of Seattle</h1>
            <p>Explore the breweries of the Emerald City.</p>
            <div className="dropdown">
                <select value={chosenBrewery} onChange={(e) => handleChange(e)}>
                    <option value={0}>--Select a Brewery--</option>
                    {renderOptions()}
                </select>
            </div>
        </header>
    )
}

export default Navigation