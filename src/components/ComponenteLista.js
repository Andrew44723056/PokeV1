import React, { useState, useEffect } from "react";
import { ComponenteCarta } from "./ComponenteCarta";
import '../Styles/ComponenteLista.css'


function ComponenteLista() {
  <ComponenteCarta/>
    const [pokemonData, setPokemonData] = useState(null);  
    useEffect(() => {
      fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
        <div>
          <input className="piña" placeholder="Buscar"></input>
        {pokemonData ? (
            <div>
            <img id="pepa" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
           </div>
        ) : (
            <p>Cargando información ...</p>
            )}
      </div>
    )};
    export {ComponenteLista};