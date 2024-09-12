import React from "react";
import style from "./card.module.css";
import star from "../../assets/Images/Star_fill.svg";
import zeroStar from '../../assets/Images/Star.svg'

function Card({ item }) {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img
          src={item.image}
          alt=""
        />
       {item.available ? (<div className={style.popular}>Popular</div>) : ''} 
      </div>
      <div>
        <div className={style.details}>
          <h2>{item.name}</h2>
          <div className={style.price}>{item.price}</div>
        </div>
        <div className={style.available}>
          <div className={style.ratings}>
            {item.rating !== null ? <img src={star} alt="" /> : <img src={zeroStar} alt="" /> }
            <span>{item.rating}</span> 
            <span>{`(${item.votes} votes)`}</span>
          </div>
          <p>{item.available ? "": "Sold out"}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
