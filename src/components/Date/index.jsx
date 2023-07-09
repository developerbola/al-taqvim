import { useEffect, useRef, useState } from "react";
import img from "../../assets/calendar.png";
import "./Date.css";
export default function index() {
  function dateBuilder(a) {
    let months = [
      "Yanvar",
      "Fevral",
      "Mart",
      "Aprel",
      "May",
      "Iyun",
      "Iyul",
      "Avgust",
      "Sentabr",
      "Oktabr",
      "Noyabr",
      "Dekabr",
    ];
    let weekDays = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ];

    let haftaKuni = weekDays[a.getDay()];
    let sana = a.getDate();
    let oyNomi = months[a.getMonth()];

    return `${haftaKuni}, ${sana} - ${oyNomi}`;
  }

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

    setTime(
      formatTime(h) + h + " : " + formatTime(m) + m + " : " + formatTime(s) + s
    );
  };

  const hijriYear = new Intl.DateTimeFormat("en-EN-u-ca-islamic", {
    day: "numeric",
    year: "numeric",
    month: "long",
  }).format(Date.now());

  return (
    <>
      <div className="Date">
        <div className="container">
          <img src={img} className="calendar" />

          <div className="date">
            <h2 className="mil">{dateBuilder(new Date())}</h2>
            <p className="hij">{hijriYear}</p>
          </div>
          <h1 className="time">{time}</h1>
        </div>
      </div>
    </>
  );
}
