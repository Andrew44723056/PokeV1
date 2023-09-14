import React, { useState, useEffect } from "react";
import "../Styles/ComponenteCarta.css";
import { Link } from "react-router-dom";
import { postPokemonFavorite } from "./ComponenteLista";
import { deletePokemonesFavorite } from "./ComponenteLista";



function ComponenteCarta({ pokemonData }) {

  const  [habilitar,sethabilitar] = useState(false);

  async function favorites(id) {
     await postPokemonFavorite(id);
     sethabilitar(true);
 
  }

  async function deletep(id) {
    await deletePokemonesFavorite(id);
    sethabilitar(false);
  }

  return (
    <div className="papadiv">
      <Link to={`/detalle/${pokemonData.id}`}>
        {pokemonData ? (
          <div className="card">
            <img className="ppp" src={pokemonData.image} />
            <p>{pokemonData.name}</p>
            <p>{pokemonData.id}</p>
          </div>
        ) : (
          <div></div>
        )}
      </Link>
      {habilitar == false ? (
        <div onClick={() => favorites(pokemonData.id)} class="button">
          ⭐
        </div>
      ) : (
        <div onClick={() => deletep(pokemonData.id)} class="button">
        ⭐
      </div>
      )}
    </div>
  );
}

export { ComponenteCarta };
