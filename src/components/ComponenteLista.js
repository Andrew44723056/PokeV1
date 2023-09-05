import React, { useState, useEffect } from "react";
import "../Styles/ComponenteLista.css";
import { getPokemonList } from "../components/Api";

function ComponenteLista() {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const url = "https://pokeapi.co/api/v2/pokemon/Limit=20";
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
        pokemonData.map((item) => {
          return (
            <div>
              <img className="card"src={item.image} />
              <p>{item.name}</p>
              <p>{item.id}</p>
            </div>
          );
        })
      ) : (
        <div class="container">
          <h2 id="loader"></h2>
          <div class="loader"></div>
          <div class="loader"></div>
          <div class="loader"></div>
        </div>
      )}
    </div>
  );
}
export { ComponenteLista };
