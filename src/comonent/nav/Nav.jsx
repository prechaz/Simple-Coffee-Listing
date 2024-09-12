import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <h1 className={style.header}>Our Collection</h1>
        <p className={style.intro}>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <ul className={style.NavLink}>
         <li><NavLink to='/'>All Products</NavLink></li> 
         <li><NavLink to='/available'>Available Now</NavLink></li> 
        </ul>
      </nav>
      
    </>
  );
}

export default Nav;
