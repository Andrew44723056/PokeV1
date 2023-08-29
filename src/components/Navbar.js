import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HeaderStyles.css";



function Navbar() {
  return (
    <nav>
      <ul className="lala">
        <li>
          <Link to="/">
            <button className="lolo">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <button className="lolo">About</button>
          </Link>
        </li>
        <li>
          <Link to="/pokedex">
            <button className="lolo">Pokedex</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
