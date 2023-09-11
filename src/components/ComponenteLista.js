import React, { useState, useEffect } from "react";
import "../Styles/ComponenteLista.css";
import { getPokemonList } from "../components/Api";
import { ComponenteCarta } from "./ComponenteCarta";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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

  const handlePagination = async (e) => {
    var value = e.target.textContent;
    console.log(value);
    if (value == 1) {
        var newUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';
        var response = await getPokemonList(newUrl)
        var data = response.array;
        setPokemonData(data);

    } else {
        var newUrl =  `https:pokeapi.co/api/v2/pokemon?offset=${(value - 1) * 20}&limit=20`;
        var response = await getPokemonList(newUrl)
        var data = response.array;
        setPokemonData(data);

    }
}

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
        <Stack spacing={2}>
          <Pagination
            count={50}
            variant="outlined"
            color="primary"
            onClick={handlePagination}
          />
        </Stack>
      </div>
    </div>
  );
}
export { ComponenteLista };
