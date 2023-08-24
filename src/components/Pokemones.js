import React, {useState, useEffect} from 'react';
import '../Styles/HeaderStyles.css'

function Pokemones() {
    // const [user, setUser] = useState([]);
  const [randomPokemons, setRandomPokemons ] = useState ([]);
  const [isLoading, setisLoading] = useState(false)

  useEffect ( () =>{
    const fetchRandomPokemon = async () => {
        try {
            const getRandomPokemonId = () => Math.floor(Math.random() * 200) + 1; // funcion que trae aleatorios
            //[100, 4,30,25]
            const pokemonIds = Array.from({length: 4},getRandomPokemonId ); // Array .from(tamañ, contenido o como llenar el contenido) 

            const fetchedPokemons = [];

            for (const id of pokemonIds ){
                const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                fetchedPokemons.push(data);
            }

            setRandomPokemons(fetchedPokemons);

        } catch (error) {
            console.error("Error capturando Pokemon data", error);
        } 
        setisLoading(true)

    };
  fetchRandomPokemon();
}, [])

  return (
    <div className='contenedor'>
        {
          isLoading 
          ? (
            randomPokemons.map((item, index) => {
             return(
              <div key={item.index}>
              <img className='imgPokemones' src={item.sprites.other['official-artwork']['front_default']} />
              <p>{item.name}</p>
            </div>
             )
            })
          )
          :(
            <h2>Esta Cargando...</h2>
          )

        }

    </div>
  )
};

export default Pokemones;













//     return (
//         <header>
//       <h1>Random Pokémon Header</h1>
//       <div className="pokemon-container">
//         {randomPokemons.map((pokemon) => (
//           <div key={pokemon.id}>
//             <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             <p>{pokemon.name}</p>
//           </div>
//         ))}
//       </div>
//     </header>
//       );
// };


























// import React, {useEffect, useState} from "react";


// function Pokemones() {

//     const [radomPokemons, setPokemonData] = useState (null)
    
//     useEffect (() =>{
//         //Realiza una solicitud a la api

//             for (let index = 0; index < 4; index++) {
//                 fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
//                 .then(reponse => reponse.json())
//                 .then(data => setPokemonData(data) )
//                 .catch(error => console.error("Error fetching data", error))               
//             }

//      },[]);

//     return ( 
//         <div>
//             {pokemonData ? (
//                 <div>
//                  <img src={pokemonData.sprites.other['official-artwork']['front_default']}/> 
//                 </div>
//             ): 
//               (  <p> Cargando informacion...</p>)
//             }
//         </div>
//     );   
// }
// export default Pokemones;