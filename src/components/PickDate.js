import React from "react";
import DatePicker from "react-date-picker";

const PickDate = (props) => {
  return (
    <>
      <DatePicker value={props.date} onChange={props.setDate} />
    </>
  );
};

export default PickDate;
