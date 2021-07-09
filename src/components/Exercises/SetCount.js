import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./SetCount.css";

import { newValue } from "../../features/exercise/exerciseSlice";

const SetCount = (props) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="set-count">
      <div className="set-count__month">{props.need}</div>
      <input
        defaultvalue={props.done}
        onChange={(event) => dispatch(newValue(event.target.value))}
        // onChange={(event) => dispatch(newValue(event.target.value))}
      ></input>
    </div>
  );
};

export const selectCount = (state) => state.counter.value;

export default SetCount;
