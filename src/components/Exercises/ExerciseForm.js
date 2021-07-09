import React from "react";

import ExerciseList from "./ExerciseList";
import "./ExerciseForm.css";

const ExerciseForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-exercise__controls">
        <ExerciseList />
      </div>
    </form>
  );
};

export default ExerciseForm;
