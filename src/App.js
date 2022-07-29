import axios from "axios";
import React, { useState, useEffect } from "react";
import PotD from "./components/PotD.js";
import DatePicker from "react-datepicker";
import * as util from "./util/util";
import "./assets/App.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState(new Date());
  const [noRecords, setNoRecords] = useState(false);

  // console.log(Date());

  const dateChoice = util.convertDate(date);

  useEffect(() => {
    setNoRecords(util.dateCompareTwo(date, "06/20/1995"));
  }, [date]);

  // console.log("dateChoice", dateChoice, typeof dateChoice);
  // console.log("noRecords: ", noRecords);
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
      <div className={noRecords ? "app-header-top" : "app-header"}>
        <div className="page-heading">
          <span>
            NASA Photo of the Day!{" "}
            <span role="img" aria-label="go!">
              🚀
            </span>
          </span>
        </div>
        <div className="divider">{""}</div>
        <div className={noRecords ? "potd-cont-no-gradient" : "potd-container"}>
          <DatePicker
            className="calendar"
            closeOnScroll={true}
            selected={date}
            onChange={(date) => setDate(date)}
            popperPlacement="bottom"
          />
          {noRecords ? null : (
            <p className="disclaimer">
              {" "}
              *there are no records prior to 06/20/1995
            </p>
          )}
          {noRecords ? (
            <div className="no-rec-cont">
              <p className="no-records">There are no records available.</p>
            </div>
          ) : (
            <PotD
              photd={nasaData.url}
              title={nasaData.title}
              explanation={nasaData.explanation}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
