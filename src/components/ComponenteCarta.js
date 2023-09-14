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
    
    <div onClick={() => favorites(pokemonData.id)} className="btn">
    <span class="leftContainer">
      <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
      <span class="like">Like</span>
    </span>
    <span class="likeCount">
      2,050
    </span>
  </div>
        


      ) : (
 
       
<div onClick={() => deletep(pokemonData.id)} className="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></div>


  
      )}
    </div>
  );
}

export { ComponenteCarta };
