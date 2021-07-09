import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./SetCount.css";

import { newValue, updateValue } from "../../features/exercise/exerciseSlice";



const SetCount = (props) => {
  // const {key, type} = props;
  const exerciseid = props.exerciseid;
  const type = props.type;
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  // const updVal = () => {
  //   dispatch(
  //     updateValue({
  //       key,
  //       type,
  //     })
  //   )
  // }

  return (
    <div className="set-count">
      <div className="set-count__month">{props.need}</div>
      {/* <h3>{exerciseid}</h3> */}
      <input
        defaultvalue={props.done}
        onChange={(event) => dispatch(updateValue({event, exerciseid, type}))}
        // onChange={updateValue}
        // onChange={(event) => dispatch(newValue(event.target.value))}
      ></input>
    </div>
  );
};

export const selectCount = (state) => state.counter.value;

export default SetCount;
