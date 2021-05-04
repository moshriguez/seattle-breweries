let id = 0;

const dropdown = document.querySelector('#dropdown');
dropdown.addEventListener('input', function(event) {
    // console.log(typeof(event.target.value));
    id = event.target.value;
    if (id !== 'hide') {
    updateArticle();
    } else {
        const container = document.querySelector('#loaded-brewery')
        container.style.display = 'none'  
    }
});

fetch(`https://moshriguez.github.io/seattle-breweries/db.json`)
    .then(function(response){return response.json();})
    .then(function(json) {
        // console.log(json.breweries)
        for (const item of json.breweries) {
            const option = document.createElement('option')
            option.value = item.id
            option.textContent = item.name
            dropdown.appendChild(option)
            }
    })

function updateArticle() {
    // fetch(`http://localhost:3000/breweries/${id}`)
    fetch(`https://moshriguez.github.io/seattle-breweries/db.json`)
    .then(function(response){return response.json();})
    .then(function(json) {
        const breweryData = json.breweries[id]
        console.log(breweryData)
        const container = document.querySelector('#loaded-brewery')
        const img = document.querySelector('#loaded-brewery img')
        const h2 = document.querySelector('#loaded-brewery h2');
        const address = document.querySelector('#address');
        const website = document.querySelector('#loaded-brewery a')
        const food = document.querySelector('#food');
        const kids = document.querySelector('#kids');
        const dogs = document.querySelector('#dogs');
        container.style.display = 'block'  
        img.src = breweryData.logo;
        img.alt = `${breweryData.name} logo`
        h2.textContent = breweryData.name;
        address.innerHTML = `Address: <strong>${breweryData.address}</strong>`;
        website.href = breweryData.website_url;
        website.textContent = 'Visit their website';
        food.innerHTML = `Is there food on site? <strong>${breweryData.food}</strong>`;
        kids.innerHTML = `Can I bring my kids? <strong>${breweryData.kids}</strong>`;
        dogs.innerHTML = `How about my furry friends? <strong>${breweryData.dogs}</strong>`;

    });
}