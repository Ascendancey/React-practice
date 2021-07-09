import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ExerciseList.css";
import ExerciseItem from "./ExerciseItem";

import {
  increment,
} from "../../features/exercise/exerciseSlice";

const ExerciseList = (props) => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
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
        <ExerciseItem
          key={1}
          category={"Push"}
          title={"1CT PAUSE BENCH PRESS"}
          loadneed={12}
          loaddone={15}
          repsneed={10}
          repsdone={5}
          rpeneed={8}
          rpedone={10}
        />
        <ExerciseItem
          key={2}
          category={"Pull"}
          title={"EXAMPLE EXERCISE 2"}
          loadneed={23}
          loaddone={10}
          repsneed={12}
          repsdone={7}
          rpeneed={9}
          rpedone={10}
        />
        <label>{count}</label>
        <button type="submit" onClick={() => dispatch(increment("1"))}>
          Submit
        </button>
        <button onClick={() => dispatch(increment("1"))}>!!!</button>
      </div>
    </Card>
  );
};

export const selectCount = (state) => state.counter.value;

export default ExerciseList;
