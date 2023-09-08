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
      <div className="papap-de-input-bottom">
        <div>
          <input className="piña" placeholder="Buscar"></input>
        </div>
        <div>
          <button className="momo">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="css-i6dzq1"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>{" "}
            Click me
          </button>
        </div>
      </div>
      {isLoading ? (
        pokemonData.map((item, index) => {
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
      <div class="pagination">
        <a href="#">Previous</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">Next</a>
      </div>
    </div>
  );
}
export { ComponenteLista };
