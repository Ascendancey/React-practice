import React from "react";

import Card from "../UI/Card";
import SetCount from "./SetCount";
import "./ExerciseItem.css";

const ExerciseItem = (props) => {
  return (
    <li>
      <Card className="exercise-item">
        <div className="exercise-item__description">
          <h2>{props.category}</h2>
          <h3>{props.title}</h3>
          <SetCount need={props.loadneed} done={props.loaddone}/>
          <SetCount need={props.repsneed} done={props.repsdone}/>
          <SetCount need={props.rpeneed} done={props.rpedone}/>
        </div>
      </Card>
    </li>
  );
};

export default ExerciseItem;
