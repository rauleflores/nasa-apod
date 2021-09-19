import axios from "axios";
import React, { useState, useEffect } from "react";
import PotD from "./components/PotD.js";
import "./assets/App.css";
import PickDate from "./components/PickDate.js";

function App() {
  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState(new Date());

  const convertDate = (date) => {
    if (date === null) {
      return new Date();
    }
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    // console.log(day, month, year);
    const output = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
    console.log("output", output, typeof output);
    return output;
  };

  const dateChoice = convertDate(date);

  console.log("dateChoice", dateChoice);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${dateChoice}&api_key=vQOtCUEhATpOsRrb3DmWpDIg6YyA7Gp6Dzt114UJ`
      )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => console.log(err));
  }, [dateChoice]);

  // console.log(nasaData);
  // console.log("date", date);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <p className="page-heading">
            NASA Photo of the Day!{" "}
            <span role="img" aria-label="go!">
              🚀
            </span>
          </p>
        </div>
        <div className="potd-container">
          <PickDate date={date} setDate={setDate} />
          <p className="disclaimer">
            * there are no records prior to 06/20/1995
          </p>
          <PotD
            photd={nasaData.url}
            title={nasaData.title}
            explanation={nasaData.explanation}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
