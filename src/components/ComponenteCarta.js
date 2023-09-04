import React, { useState, useEffect } from "react";
import '../Styles/ComponenteCarta.css'


function ComponenteCarta() {
  const [pokemonData, setPokemonData] = useState(null);
  // const idpokemon = Math.floor(Math.random() * (251 - 1), 0);

  useEffect(() => {
    fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
    // fetch ('https://pokeapi.co/api/v2/characteristic/pikachu')
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
        <input className="piña" placeholder="Buscar"></input>
      <h1 id="pepe"></h1>
      {pokemonData ? (
          <div>
          <p>Nombre: {pokemonData.name}</p>
          <p>Peso: {pokemonData.weight}</p>
          <p>Altura: {pokemonData.height}</p>
          <img src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
        </div>
      ) : (
          <p>Cargando información ...</p>
          )}
    </div>
  )};
  export {ComponenteCarta};