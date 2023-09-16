import React, { useState, useEffect } from "react";
import "../Styles/ComponenteCarta.css";
import { Link } from "react-router-dom";
import { postPokemonFavorite } from "./ComponenteLista";
import { deletePokemonesFavorite } from "./ComponenteLista";

function ComponenteCarta({ pokemonData }) {
  const [habilitar, sethabilitar] = useState(false);

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
        <div onClick={() => favorites(pokemonData.id)} class="bookmarkBtn">
          <span class="IconContainer">
            <svg viewBox="0 0 384 512" height="0.9em" class="icon">
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"></path>
            </svg>
          </span>
          <p class="text">Save</p>
        </div>
      ) : (
        <div onClick={() => deletep(pokemonData.id)} class="btn">
          <svg
            viewBox="0 0 15 17.5"
            height="17.5"
            width="15"
            xmlns="http://www.w3.org/2000/svg"
            class="icon2"
          >
            <path
              transform="translate(-2.5 -1.25)"
              d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
              id="Fill"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}

export { ComponenteCarta };
