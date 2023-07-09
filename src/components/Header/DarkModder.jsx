import React, { useContext, useState } from "react";
import "./Header.css";
import context from "../../context";

export default function index() {
  const { dark, setDark } = useContext(context);
  const activer = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };
  return (
    <>
      <div className="DarkModder">
        <div className="switcher" onClick={activer}>
          <div className="ball"></div>
        </div> 
      </div>
    </>
  );
}
