import axios from "axios";
import React, { useState, useEffect } from "react";
import PotD from "./components/PotD.js";
import "./assets/App.css";

function App() {
  const [nasaData, setNasaData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2021-08-17&api_key=vQOtCUEhATpOsRrb3DmWpDIg6YyA7Gp6Dzt114UJ"
      )
      .then((res) => {
        setNasaData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(nasaData);
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
