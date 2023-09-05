import React, { useState, useEffect } from "react";
// import { getPokemonList } from "./Api";
// import { ComponenteCarta } from "./ComponenteCarta";
import '../Styles/ComponenteLista.css'
import { getPokemonList } from "../components/Api";


function ComponenteLista() {
  const [pokemonData, setPokemonData] = useState(null);  
  // <ComponenteCarta/>
  useEffect(() => {
    
      const fetchPokemon = async () => {

       try {
         const url = "https://pokeapi.co/api/v2/pokemon?Limit=20"
         const response= await getPokemonList(url);
         

         console.log("holaaaa",response);
         const data=response.array
         console.log(data);
         
         setPokemonData(data);

       }
       
       catch (error) {
        console.error("Error capturando la Pokemon data",error);
        return null;
    } 
      }

      fetchPokemon();
    

      // fetch ('https://pokeapi.co/api/v2/pokemon/charmander/')
      // // fetch ('https://pokeapi.co/api/v2/pokemon?limit=20')
        // .then((response) => response.json())
        // .then((data) => setPokemonData(data))
        // .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
        <div>
          <input className="piña" placeholder="Buscar"></input>
        {pokemonData ? (
            <div>
            <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]}/>
           </div>
        ) : (
            <p>Cargando información ...</p>
            )}
      </div>
    )};
    export {ComponenteLista};