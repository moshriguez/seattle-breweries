import React from 'react'

const BreweryCard = ({brewery}) => {

    return (
        <div className='beer-background-container'>
            <div className='brewery-card'>
                <img src={brewery.logo} alt={brewery.name + ' logo'} />
                <h2>{brewery.name}</h2>
                <p>Address: <strong>{brewery.address}</strong></p>
                <a href={brewery.website_url} >Visit their website</a>
                <p>Is there food on site? <strong>{brewery.food}</strong></p>
                <p>Can I bring my kids? <strong>{brewery.kids}</strong></p>
                <p>How about my furry friends? <strong>{brewery.dogs}</strong></p>
            </div>
        </div>
    )
}

export default BreweryCard