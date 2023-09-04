import React, { Component, createContext } from "react"
import '../Styles/ComponenteCarta.css'
import '../Styles/ComponenteLista.css'
import { ComponenteCarta } from "../components/ComponenteCarta";
import { ComponenteLista } from "../components/ComponenteLista";


function Pokedex() {
  return <div>
    <h1>Pokemones</h1>
    <ComponenteLista/>
    <ComponenteCarta/>

  </div>
}
export default Pokedex;
