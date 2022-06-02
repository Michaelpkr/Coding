document.querySelector("button").addEventListener("click", getPokemon)


function getPokemon(){

    let pokemon = document.querySelector("input").value.toLowerCase()

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
.then(res => res.json())
.then(data => {
    console.log(data)
   document.querySelector("h1").innerText = (data.species.name)
  document.querySelector("img").src = (data.sprites.front_default)
})
.catch(err => {
    console.log(`error ${err}`)
});

}