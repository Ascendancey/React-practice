import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Sweets",
      amount: 55.34,
      date: new Date(2021, 5, 12),
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
      date: new Date(2021, 5, 14),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 140.56,
      date: new Date(2021, 5, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
