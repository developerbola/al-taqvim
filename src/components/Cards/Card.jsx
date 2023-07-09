import React, { useState } from "react";
import "./Cards.css";
export default function Card({ title, img, prayTime, isActive }) {
  return (
    <>
      <div className={`Card ${isActive ? "active" : ""}`}>
        <p className="title">{title}</p>
        <img src={img} />
        <p className="prayTime">{prayTime}</p>
      </div>
    </>
  );
}
