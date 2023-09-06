import React, { useState, useEffect } from "react";
import "../Styles/ComponenteLista.css";
import { getPokemonList } from "../components/Api";
import { ComponenteCarta } from "./ComponenteCarta";

function ComponenteLista() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon?Limit=20";
        const response = await getPokemonList(url);
        
        const data = response.array;
        
        setPokemonData(data);
      } catch (error) {
        console.error("Error capturando la Pokemon data", error);
        return null;
      }
      setisLoading(true);
    };
    
    fetchPokemon();
  }, []);
  
  return (
    <div>
      <input className="piña" placeholder="Buscar"></input>
      {isLoading ? (
        pokemonData.map((item,index) => {
          return (
         <ComponenteCarta key={`${item.name}-${index}`} pokemonData={item} />
          );
        })
        ) : (
          <div>
          <h2 id="loader"></h2>
          <div className="loader"></div>
          <div className="loader"></div>
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}
export { ComponenteLista };











// import React, { useState, useEffect } from "react";
// // import { ComponenteCarta } from "./ComponenteCarta";
// import { ComponenteCarta } from "./ComponenteCarta";
// import '../Styles/ComponenteLista.css'


// function ComponenteLista() {
//   <ComponenteCarta/>
//     const [pokemonData, setPokemonData] = useState(null);  
//     useEffect(() => {
//       fetch ('https://pokeapi.co/api/v2/pokemon/bulbasaur/')
//         .then((response) => response.json())
//         .then((data) => setPokemonData(data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }, []);
  
//     return (
//         <div>
//           <input className="piña" placeholder="Buscar"></input>
//         {pokemonData ? (
//             <div> 
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//             <img className="card" src={pokemonData.sprites.other["official-artwork"]["front_default"]} alt="Pikachu" />
//            </div>
//         ) : (
//             <p>Cargando información ...</p>
//             )}
//       </div>
//     )};
//     export {ComponenteLista};