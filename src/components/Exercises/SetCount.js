import React from "react";
import { useDispatch } from "react-redux";

import "./SetCount.css";

import { updateValue } from "../../features/exercise/exerciseSlice";

const SetCount = (props) => {
  const exerciseid = props.exerciseid;
  const type = props.type;
  const dispatch = useDispatch();

  return (
    <div className="set-count">
      <div className="set-count__month">{props.need}</div>
      <input
        defaultvalue={props.done}
        onChange={(event) => dispatch(updateValue({ event, exerciseid, type }))}
      ></input>
    </div>
  );
};

export const selectCount = (state) => state.counter.value;

export default SetCount;
