import { useContext, useEffect, useRef, useState } from "react";
import "./SelectRegion.css";
import context from "../../context";
export default function index() {
  // let [value, setValue] = useState();

  let [className, setClassName] = useState("");
  function toggleDropdown() {
    if (className == "") {
      setClassName("active");
    } else {
      setClassName("");
    }
  }

  const { fetchData } = useContext(context);

  let inputRef = useRef();

  function show(a) {
    if (inputRef.current) {
      inputRef.current.value = a;
      fetchData(a);
    }


  }

  return (
    <>
      <div className="SelectRegion">
        <section className="select-region">
          <h2 className="region-title">Hududni tanlang:</h2>
          <header className="regionHeader">
            <div className={`dropdown ${className}`} onClick={toggleDropdown}>
              <input
                type="text"
                className="text02"
                id="text2"
                readOnly="."
                placeholder="Toshkent"
                ref={inputRef}
              />
              <div className="option">
                <div onClick={() => show("Namangan")}>Namangan</div>
                <div onClick={() => show("Andijon")}>Andijon</div>
                <div onClick={() => show(`Farg'ona`)}>Farg'ona</div>
                <div onClick={() => show("Guliston")}>Guliston</div>
                <div onClick={() => show("Jizzax")}>Jizzax</div>
                <div onClick={() => show("Navoiy")}>Navoiy</div>
                <div onClick={() => show("Nukus")}>Nukus</div>
                <div onClick={() => show("Toshkent")}>Toshkent</div>
                <div onClick={() => show("Termiz")}>Termiz</div>
                <div onClick={() => show("Samarqand")}>Samarqand</div>
                <div onClick={() => show("Qarshi")}>Qarshi</div>
                <div onClick={() => show("Xiva")}>Xiva</div>
              </div>
            </div>
          </header>
        </section>
      </div>
    </>
  );
}
