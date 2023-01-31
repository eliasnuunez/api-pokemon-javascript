const idPokemons = [];
for (let id = 1; id <= 100; id++) {
  idPokemons.push(id);
}
idPokemons.forEach(IDs =>{ 
  apiURL = `https://pokeapi.co/api/v2/pokemon/${IDs}`;
  axios.get(apiURL)
    .then(response => {

        let nombre = response.data.name;
        let img    = response.data.sprites.front_default;
        
        const boxPokemon = document.createElement("div");  
        boxPokemon.innerHTML = `
        <figure class="boxPokemon">
        <img src="`+img+`" class="imgPokemon"></img>
        <h1 class="nombresPokemon">`+nombre+`</h1>
        </figure>
        `;  
        boxPokemon.classList.add("container");
        document.body.appendChild(boxPokemon);
    })
    .catch(error => {
      console.error(error);
    });
});




