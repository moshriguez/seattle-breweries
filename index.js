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

fetch(`http://localhost:3000/breweries`)
    .then(function(response){return response.json();})
    .then(function(json) {
        //console.log(json)
        for (const item of json) {
            const option = document.createElement('option')
            option.value = item.id
            option.textContent = item.name
            dropdown.appendChild(option)
            }
    })

function updateArticle() {
    fetch(`http://localhost:3000/breweries/${id}`)
    .then(function(response){return response.json();})
    .then(function(json) {
        console.log(json)
        const container = document.querySelector('#loaded-brewery')
        const img = document.querySelector('#loaded-brewery img')
        const h2 = document.querySelector('#loaded-brewery h2');
        const address = document.querySelector('#address');
        const website = document.querySelector('#loaded-brewery a')
        const food = document.querySelector('#food');
        const kids = document.querySelector('#kids');
        const dogs = document.querySelector('#dogs');
        container.style.display = 'block'  
        img.src = json.logo;
        img.alt = `${json.name} logo`
        h2.textContent = json.name;
        address.innerHTML = `Address: <strong>${json.address}</strong>`;
        website.href = json.website_url;
        website.textContent = 'Visit their website';
        food.innerHTML = `Is there food on site? <strong>${json.food}</strong>`;
        kids.innerHTML = `Can I bring my kids? <strong>${json.kids}</strong>`;
        dogs.innerHTML = `How about my furry friends? <strong>${json.dogs}</strong>`;

    });
}