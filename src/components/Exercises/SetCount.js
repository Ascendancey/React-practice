import React from "react";

import "./SetCount.css";

const SetCount = (props) => {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  return (
    <div className="set-count">
      <div className="set-count__month">{props.need}</div>
      {/* <div className="set-count__year">{year}</div>
      <div className="set-count__day">{day}</div> */}
      <input value={props.done}></input>
    </div>
  );
};

export default SetCount;
