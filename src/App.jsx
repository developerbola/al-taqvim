import "./App.css";
// Components
import Header from "./components/Header";
import SelectRegion from "./components/SelectRegion";
import Date from "./components/Date";
import Cards from "./components/Cards";
// Tools
import context from "./context";
import { useEffect, useState } from "react";
function App() {
  const [result, setResult] = useState();
  const [dark, setDark] = useState();
  const fetchData = async (a) => {
    const res = await fetch(`https://islomapi.uz/api/present/day?region=${a}`);
    const data = await res.json();
    setResult(data);
  };

  return (
    <>
      <context.Provider value={{ fetchData, dark, setDark }}>
        <main className={`${dark ? "darkMain" : ""}`}>
          <Header />
          <SelectRegion />
          <Date />
          <Cards result={result} />
        </main>
      </context.Provider>
    </>
  );
}

export default App;
