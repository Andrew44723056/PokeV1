import React from "react";
import Pokemones from "../components/Pokemones";
import Contenido from "../components/Contenido";

function Home() {
    return (
        <div>
            <h1>Pokedex.lil</h1>
            hola
            <h4>Bienvenid@ a mi primera pagina wed echa 100% con React:</h4>
            <h5>La pagina wed se trata de Pokemones, Lo que hago es que estraigo las apis de los pokemones y las pinto en patalla y hago que sean aleatoreas cada que se reinicia la pagina wed.</h5>   
            <Pokemones/>   
            <Contenido/>
        </div>
    );
    
}

export default Home;