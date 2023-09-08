import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Pokedex from "../pages/Pokedex";
import ComponenteDetalle from "../components/ComponenteDetalle";
import "../App.css";

function AppRouter() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/detalle/:id" element={<ComponenteDetalle />} />
      </Routes>
    </div>
  );
}
export default AppRouter;
