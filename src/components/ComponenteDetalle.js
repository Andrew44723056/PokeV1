import React, { useState, useEffect } from "react";
// import React from "react";
import "../Styles/ComponeneteDetalle.css";
import { NavLink } from "react-router-dom";
function ComponenteDetalle() {
  // const [pokemonData, setPokemonData] = useState(null);
  // useEffect(() => {
  //       fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
  //         .then((response) => response.json())
  //         .then((data) => setPokemonData(data))
  //         .catch((error) => console.error("Error fetching data:", error));
  //     }, []);
  //     <div>
  // //         {pokemonData ? (
  //             <div>
  //             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
  //            </div>
  //         ) : (
  //             <div></div>
  //             )}
  //       </div>
  return (
    <div>
      <div>
        <NavLink to='/pokedex'>
        <button className="botton-poke">
        <span>Pokemons</span>
       </button>
        </NavLink>
      </div>
      <h4>Muy pronto info de los pokemones</h4>
    </div>
  );
}

export default ComponenteDetalle;
