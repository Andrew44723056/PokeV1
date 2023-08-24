import React from 'react';
import { Link } from 'react-router-dom';
// import './NavStyles.css';


function Navbar(){
    return(
        <nav>
          <ul className="Links">
            <a><Link to="/">Homdde</Link></a>
            <a><Link to="/about">About</Link></a>
            <a><Link to="/pokedex">Pokemon</Link></a>
          </ul>
        </nav>
    )
}
export default Navbar