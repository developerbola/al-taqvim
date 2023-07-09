import React, { useContext, useEffect, useState } from "react";
import context from "../../context";
import "./Cards.css";
import Card from "./Card";
import Bomdot from "../../assets/bomdot.png";
import Quyosh from "../../assets/Quyosh.png";
import Peshin from "../../assets/Peshin.png";
import Asr from "../../assets/Asr.png";
import Shom from "../../assets/Shom.png";
import Xufton from "../../assets/Xufton.png";

export default function index({ result }) {
  const { fetchData } = useContext(context);

  useEffect(() => {
    fetchData("Toshkent");
  }, []);
  const [bomdot, setBomdot] = useState(false);
  const [quyosh, setQuyosh] = useState(false);
  const [peshin, setPeshin] = useState(false);
  const [asr, setAsr] = useState(false);
  const [shom, setShom] = useState(false);
  const [xufton, setXufton] = useState(false);

  const [time, setTime] = useState();

  const formatTime = (a) => {
    if (a < 10) {
      return "0";
    } else {
      return "";
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    setTime(formatTime(h) + h + formatTime(m) + m + formatTime(s) + s);
  };

  useEffect(()=>{
    if (result) {
      if (result.times.tong_saharlik.split(':').join('') < time && time < result.times.quyosh.split(':').join('')) {
        setBomdot(true);
      }
      if (result.times.quyosh.split(':').join('') < time && time < result.times.peshin.split(':').join('')) {
        setQuyosh(true);
      }
      if (result.times.peshin.split(':').join('') < time && time < result.times.asr.split(':').join('')) {
        setPeshin(true);
      }
      if (result.times.asr.split(':').join('') < time && time < result.times.shom_iftor.split(':').join('')) {
        setAsr(true);
      }
      if (result.times.shom_iftor.split(':').join('') < time && time < result.times.hufton.split(':').join('')) {
        setShom(true);
      }
      if (result.times.hufton.split(':').join('') < time || time < result.times.tong_saharlik.split(':').join('')) {
        setXufton(true);
      }
    }
  },[time])

  return (
    <>
      <div className="Cards">
        <Card
          title="Bomdot"
          img={Bomdot}
          prayTime={result ? result.times.tong_saharlik : "00:00"}
          isActive={bomdot}
        />
        <Card
          title="Quyosh"
          img={Quyosh}
          prayTime={result ? result.times.quyosh : "00:00"}
          isActive={quyosh}
        />
        <Card
          title="Peshin"
          img={Peshin}
          prayTime={result ? result.times.peshin : "00:00"}
          isActive={peshin}
        />
        <Card
          title="Asr"
          img={Asr}
          prayTime={result ? result.times.asr : "00:00"}
          isActive={asr}
        />
        <Card
          title="Shom"
          img={Shom}
          prayTime={result ? result.times.shom_iftor : "00:00"}
          isActive={shom}
        />
        <Card
          title="Xuftom"
          img={Xufton}
          prayTime={result ? result.times.hufton : "00:00"}
          isActive={xufton}
        />
      </div>
    </>
  );
}
