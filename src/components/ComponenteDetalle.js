// import React, { useState, useEffect } from "react";
import React from "react";

function ComponenteDetalle() {
  return <div>
             <h4>Muy pronto info de los pokemones</h4>
       </div>;


  //     const [pokemonData, setPokemonData] = useState(null);
  //     useEffect(() => {
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
}

export default ComponenteDetalle;
