import { useSelector } from "react-redux";

import Card from "../UI/Card";
import "./ExerciseList.css";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = (props) => {
  const count = useSelector(selectCount);
  return (
    <Card className="exercises">
      <div className="exercises-list">
        <label>Exercises</label>
        <div className="exercises-list__headers">
          <h4 className="exercises-list__headers__category">Category</h4>
          <h4 className="exercises-list__headers__left">Exercise</h4>
          <h4 className="exercises-list__headers__right">LOAD</h4>
          <h4 className="exercises-list__headers__right">REPS</h4>
          <h4 className="exercises-list__headers__right">RPE</h4>
        </div>
        {count.map((item) => (
          <ExerciseItem
            exerciseid={item.exerciseid}
            category={item.category}
            title={item.title}
            loadneed={item.loadneed}
            loaddone={item.loaddone}
            repsneed={item.repsneed}
            repsdone={item.repsdone}
            rpeneed={item.rpeneed}
            rpedone={item.rpedone}
          />
        ))}
        <button type="submit" onClick={() => alert("Submit placeholder")}>
          Submit
        </button>
      </div>
    </Card>
  );
};

export const selectCount = (state) => state.counter.items;

export default ExerciseList;
