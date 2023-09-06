import React, { Component, createContext } from "react"
import '../Styles/ComponenteCarta.css'
import '../Styles/ComponenteLista.css'
import { ComponenteLista } from "../components/ComponenteLista";


function Pokedex() {
  return <div>
    <h1>Pokemones</h1>
    <ComponenteLista/>
    </div>
}
export default Pokedex;
