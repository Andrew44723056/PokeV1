import React, { useState, useEffect } from "react";
import "../Styles/ComponenteCarta.css";
import { Link } from "react-router-dom";

function ComponenteCarta({ pokemonData }) {
  return (
    <div className="papadiv">
        <div >
          <Link to={"/detalle"}>
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
        </div>
    </div>
    
  );
}
export { ComponenteCarta };
