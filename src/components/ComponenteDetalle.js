import React, { useState, useEffect } from "react";
import "../Styles/ComponeneteDetalle.css";
import { NavLink, useParams } from "react-router-dom";
import "../Styles/ComponenteLista.css";

function ComponenteDetalle() {
  // <ComponenteCarta/>
  const [pokemonData, setPokemonData] = useState(null);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {pokemonData ? (
        <div>
          <div>
            <div>
              <NavLink to="/pokedex">
                <button className="botton-poke">Pokemons</button>
              </NavLink>
            </div>
          </div>
          <div className="papa2">
            <div class="card2">
              <div class="card__content">
                <img
                  className="card-detalles"
                  src={
                    pokemonData.sprites.other["official-artwork"][
                      "front_default"
                    ]
                  }
                  alt="Pikachu"
                />
              </div>
            </div>
          </div>
          <p>{pokemonData.name}</p>{" "}
        </div>
      ) : (
        <p>Cargando información ...</p>
      )}
    </div>
  );
}

export default ComponenteDetalle;
