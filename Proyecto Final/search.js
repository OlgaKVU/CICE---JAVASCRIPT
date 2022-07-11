document.querySelector('#search').addEventListener("click",getPokemon);

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string){
    return string.toLowerCase();
}

function getPokemon (e){

 const name = document.querySelector("#pokemonName").value;
 const pokemonName = lowerCaseName(name);
 fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
 .then((response)=>response.json())
 .then((data)=>{
    document.querySelector(".pokemonBox").innerHTML=`
    
    <div class="card">
    <img src="${data.sprites.other["official-artwork"].front_default}"
     alt="${capitalizeFirstLetter(data.name)}">

</div>
<div class="pokemonInfo">
    <h1>${capitalizeFirstLetter(data.name)}</h1>
    <p>${data.weight}</p>
    <p>Pokémon was invented by a Japanese man named Satoshi Tajiri and his friend Ken Sugimori, who is an illustrator. Back in 1982 Satoshi started a gaming magazine together with his friends called Game Freak, but after a while he decided to start making his own video games, instead of writing about them.</p>
    
</div>
    `;
    
    
 }).catch((err) =>{
    document.getElementById("pokemonName_error").innerHTML = " Upps, something went wrong!";
   
 });

 e.preventDefault();

}
