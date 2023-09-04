import React, { useState, useEffect } from "react";
import '../Styles/ComponenteCarta.css'


function ComponenteCarta() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      
      
      {pokemonData ? (
          <div>
          <p>Nombre: {pokemonData.name}</p>
          <p>Peso: {pokemonData.weight}</p>
          <p>Altura: {pokemonData.height}</p>
        </div>
      ) : (
          <p>Cargando información ...</p>
          )}
    </div>
  )};
  export {ComponenteCarta};