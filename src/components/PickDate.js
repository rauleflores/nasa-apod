import React from "react";
import DatePicker from "react-date-picker";
import "../assets/App.css";

const PickDate = (props) => {
  return (
    <DatePicker
      className="calendar"
      closeOnScroll={true}
      value={props.date}
      selected={props.date}
      onChange={props.setDate}
    />
  );
};

export default PickDate;
