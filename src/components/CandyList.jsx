import React, { useState, useEffect } from "react";
import "./CandyList.css";
import CandyCard from "./CandyCard.jsx";

const CandyList = () => {
  const listing = [
    {
      brand: "Aero",
      descrip:
        "A popular brand of milk chocolate bar made by Nestlé that is filled with tiny air bubbles. Aero is half about the taste, and half about the texture. The bubbles change the way the chocolate dissolves in the mouth -- it's a different sensation than with a piece of solid chocolate.",
      canImg: "/src/components/images/aero.jpg",
    },
    {
      brand: "Wunderbar",
      descrip: "Chocolate for Vikings and Warriors",
      canImg: "/src/components/images/wunderbar.jpg",
    },
    {
      brand: "Reese",
      descrip: "PEANUT BUTTER CHOCOLATE",
      canImg: "/src/components/images/reese.jpg",
    },
  ];

  return (
    <div>
      {listing.map((candy) => {
        <CandyCard candy={candy} />;
      })}
    </div>
  );
};

export default CandyList;
