import React from 'react'

const beerMugIcon = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xOS41IDkuNWMtLjUxNCAwLTEuMDE2LS4wNzgtMS41LS4yMTZ2OC43MTZjMCAuNTUyLS40NDcgMS0xIDFzLTEtLjQ0OC0xLTF2LTguMzYzYy0uNjM2LjIyOS0xLjMwOC4zNjMtMiAuMzYzcy0xLjM2NC0uMTM0LTItLjM2M3Y4LjM2M2MwIC41NTItLjQ0NyAxLTEgMXMtMS0uNDQ4LTEtMXYtOC43MTZjLS40ODQuMTM4LS45ODYuMjE2LTEuNS4yMTYtLjgxMyAwLTEuNTgzLS4xODItMi4yNzgtLjVoLTIuMjIyYy0xLjY1NCAwLTMgMS4zNDYtMyAzdjVjMCAxLjY1NCAxLjM0NiAzIDMgM2gyYzAgMi4yMDkgMS43OTEgNCA0IDRoOGMyLjIwOSAwIDQtMS43OTEgNC00di0xMWgtLjIyMmMtLjY5NS4zMTgtMS40NjUuNS0yLjI3OC41em0tMTMuNSA4LjVoLTJjLS41NTIgMC0xLS40NDktMS0xdi01YzAtLjU1MS40NDgtMSAxLTFoMnptMi41LTEwLjVjLjk0IDAgMS43OS0uMzc1IDIuNDE4LS45NzkuNzM0Ljg5NiAxLjgzNCAxLjQ3OSAzLjA4MiAxLjQ3OXMyLjM0OC0uNTgzIDMuMDgyLTEuNDc5Yy42MjguNjA0IDEuNDc4Ljk3OSAyLjQxOC45NzkgMS45MzMgMCAzLjUtMS41NjcgMy41LTMuNXMtMS41NjctMy41LTMuNS0zLjVjLS45NCAwLTEuNzkuMzc1LTIuNDE4Ljk3OS0uNzM0LS44OTYtMS44MzQtMS40NzktMy4wODItMS40NzlzLTIuMzQ4LjU4My0zLjA4MiAxLjQ3OWMtLjYyOC0uNjA0LTEuNDc4LS45NzktMi40MTgtLjk3OS0xLjkzMyAwLTMuNSAxLjU2Ny0zLjUgMy41czEuNTY3IDMuNSAzLjUgMy41eiIvPjwvc3ZnPg=="

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
            <img src={beerMugIcon} alt='beer-icon' id='beer-icon'/>
            <img src={beerMugIcon} alt='beer-mirror-icon' id='beer-mirror-icon'/>
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