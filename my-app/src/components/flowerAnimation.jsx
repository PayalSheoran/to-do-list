import React from "react";
import "../flower.css";
import flower from "../assets/flower.svg";

function FlowerAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="flowers ">
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
        <img src={flower}></img>
      </div>
    </div>
  );
}

export default FlowerAnimation;
