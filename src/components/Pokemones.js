import React, { useState, useEffect } from "react";
import "../Styles/HeaderStyles.css";

function Pokemones() {
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const getRandomPokemonId = () => Math.floor(Math.random() * 500) + 1; // funcion que trae aleatorios
        const pokemonIds = Array.from({ length: 8 }, getRandomPokemonId); // Array .from(tamañ, contenido o como llenar el contenido)

        const fetchedPokemons = [];

        for (const id of pokemonIds) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          const data = await response.json();
          fetchedPokemons.push(data);
        }

        setRandomPokemons(fetchedPokemons);
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setisLoading(true);
    };
    fetchRandomPokemon();
  }, []);

  return (
    <div className="contenedor">
      {isLoading ? (
        randomPokemons.map((item, index) => (
          <div key={index}>
            <img
              className="imgPokemones"
              src={item.sprites.other["official-artwork"]["front_default"]}
              alt={item.name}
            />
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <h2 className="pedro"></h2>
      )}
    </div>
  );
}
export default Pokemones;
