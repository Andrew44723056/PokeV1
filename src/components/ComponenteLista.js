import React, { useState, useEffect } from "react";
import "../Styles/ComponenteLista.css";
import { getPokemonList } from "../components/Api";
import { ComponenteCarta } from "./ComponenteCarta";
// import handlePagination from "./Pagination";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ComponenteLista() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [filterPokemones, setfilterPokemones] = useState("");


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

  const handleSearch = (e) => {
    setfilterPokemones(e.target.value);
  };
  const filteredPokemon = pokemonData.filter(
    (pokemon) =>
      pokemon.name
        .toLowerCase()
        .trim()
        .includes(filterPokemones.toLowerCase().trim()) || // Filtrar por nombre
      pokemon.id.toString().includes(filterPokemones) // Filtrar por ID
  );

  const handlePagination = async (e) => {
    var value = e.target.textContent;
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
        <input
          placeholder="Buscar"
          className="piña"
          value={filterPokemones}
          onChange={handleSearch}
        ></input>
        </div>
      </div>
      {isLoading ? (
        filteredPokemon.map((item, index, ) => {
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

export async function postPokemonFavorite(pokemonId) {
  try{
    
    return fetch ("https://650078ce18c34dee0cd4f8ce.mockapi.io/Favorites/",
    {
      method:"POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        idPokemon: pokemonId
      })
    }
    
    
    ).then((response) =>{
       if (response.ok) {
        console.log("datos guardados correctamente");
       }else{
        throw 'error';
       }
    })

  } catch (error) {
    console.log("Hubo un error al llamar al api");
    return[]
  } 
}

export async function getPokemonFavorite() {
  try{
       const requestPokemon = await fetch("https://650078ce18c34dee0cd4f8ce.mockapi.io/Favorites/")
       const postPokemonFavoritosData = await requestPokemon.json();
       return postPokemonFavoritosData;
  } catch (error) {
    console.log("Hubo un error al llamar al api");
    return[]
  } 
}

export async function deletePokemonFavorite(idP) {
  try{ 
    const getPokemones = await getPokemonesFavoritos();
    let deleteId = '';

    const verificar = getPokemones.some(({idPokemon,id}) =>{
      if (idPokemon == idP){
       deleteId = id;
      }
    })    
     return verificar



  } catch (error) {
    console.log("Hubo un error al llamar al api");
    return[]
  } 
}