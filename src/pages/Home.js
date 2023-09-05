import React from "react";
import Pokemones from "../components/Pokemones";
import Contenido from "../components/Contenido";
// import ThemeSelector from "../components/ThemeSelector"

function Home() {
  return (
    <div>
      <h1>Pokedex.lil</h1>
      <h4>Bienvenid@ a mi primera pagina wed echa 100% con React:</h4>
      <h5>
        La pagina wed se trata de Pokemones, Lo que hago es que extraigo las
        apis de los pokemones y las pinto en patalla y hago que sean aleatorias
        cada que se reinicia la pagina wed.
      </h5>
      <Pokemones />
      <Contenido />
      {/* <ThemeSelector/> */}
    </div>
  );
}

export default Home;
