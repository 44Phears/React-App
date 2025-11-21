import React from "react";
import "./CandyCard.css";

const CandyCard = ({ candy }) => {
  return (
    <div className="card">
      <img src={candy.canImg} alt="CandyImg" />
      <h3>{candy.brand}</h3>
      <p>{candy.descrip.slice(0, 100) + "..."}</p>
    </div>
  );
};

export default CandyCard;
