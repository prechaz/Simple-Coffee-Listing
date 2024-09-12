import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <h1>Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <ul>
         <li><NavLink to='/'>All Products</NavLink></li> 
         <li><NavLink to='/available'>Available Now</NavLink></li> 
        </ul>
      </nav>
      
    </>
  );
}

export default Nav;
