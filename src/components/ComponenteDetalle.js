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
    <div className="img2">
      {pokemonData ? (
        <div>
          <div>
            <div>
              <NavLink to="/pokedex">
                <button className="botton-poke">back</button>
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
                {/* <h2>{pokemonData.stats}</h2> */}

              </div>
            </div>
          </div>
          <div className="Info-papa">
          <h3 className="info">Nombre</h3>
          <p className="info">{pokemonData.name}</p>
          <hr className="info2"></hr>
          <h3 className="info">Tipo</h3>
           <p className="info">{pokemonData.types[0].type.name} </p>
          <hr className="info2"></hr>
          <h3 className="info">Peso</h3>
           <p className="info">{pokemonData.weight} </p>
          <hr className="info2"></hr>
          <h3 className="info">Altura</h3>
           <p className="info">{pokemonData.height} </p>
          {/* <hr className="info2"></hr> */}
           </div>
          
        </div>
      ) : (
        <p>Cargando información ...</p>
      )}
    </div>
  );
}

export default ComponenteDetalle;
