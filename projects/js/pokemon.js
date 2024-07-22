
let search_user = document.getElementById('name');
let search_btn = document.querySelector('.search-btn');
let message = document.querySelector('.message');
container = document.querySelector('.container');

let base_url = 'https://pokeapi.co/api/v2/pokemon/';


async function fetchPokemon(pokemonName) {

    try {
        //fetch pokemon name through api   
        let response = await fetch(`${base_url}${pokemonName.toLowerCase()}`);

        // check if response is ok or not
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // set the response to data variable and return it.
        let data = await response.json();
        return data;

        // catch errors
    } catch (error) {
        if (error.message.includes('Pokemon not found')) {
            throw error;
        }
        throw new Error(`Please enter a valid pokemon name`);
    }
}

function displayPokemon(pokemon) {
    setTimeout(() => {


        container.innerHTML = '';
        message.textContent = `Showing data for ${pokemon.name}`;

        const img = document.createElement('img');

        // This will set the src attribute of the image
        img.src = pokemon.sprites.front_default;

        // This will set the alt attribute of the image
        img.alt = pokemon.name;
        container.appendChild(img);


        let info = document.createElement('div');
        info.innerHTML = `<p> name : ${pokemon.name}</p>
            <p> height : ${pokemon.height}</p>
            <p> weight : ${pokemon.weight}</p>
            <p> base experience : ${pokemon.base_experience}</p>`

        container.appendChild(info);
        container.style.backgroundColor = 'black';
        container.style.color = 'white';
        container.style.display = 'flex';
    }, 2000);
}


async function searchData() {
    let userInput = search_user.value.trim();

    if (!userInput) {
        message.textContent = 'Please enter a pokemon name';
        // message.style.color = 'red';
        return;
    }

    message.textContent = 'fetching data...';
    container.innerHTML = '';

    try {

        const pokemon = await fetchPokemon(userInput);
        console.log(pokemon);
        displayPokemon(pokemon);
    } catch (error) {
        message.textContent = error.message;
    } finally {
        search_user.value = '';
    }

}
search_btn.addEventListener('click', searchData);

search_user.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchData();
    }
});