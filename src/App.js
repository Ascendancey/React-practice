import React, { useState } from 'react';
import ExerciseForm from './components/Exercises/ExerciseForm';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Sweets",
    amount: 55.34,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e2",
    title: "Tuition fee",
    amount: 149.0,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 500.0,
    date: new Date(2020, 5, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 140.56,
    date: new Date(2021, 5, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES); 

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <ExerciseForm items={expenses}/>
      {/* <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} /> */}
    </div>
  );
};

export default App;
