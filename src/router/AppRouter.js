import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Pokedex from "../pages/Pokedex";
import "../App.css";
import ThemeSelector from "../components/ThemeSelector";

function AppRouter() {
  return (
    <div className="App">
      <Navbar />
      <ThemeSelector/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </div>
  );
}
export default AppRouter;
