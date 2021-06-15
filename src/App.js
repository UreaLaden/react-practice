import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id:2,title: 'Rent', amount: 3294.67, date: new Date(2021, 2, 15) },
  { id:3,title: 'Water', amount: 54.67, date: new Date(2021, 2, 1) },
  {
    id:4,
    title: 'Electricity',
    amount: 151.67,
    date: new Date(2022, 2, 14),
  },
  {
    id:5,
    title: 'Taekwondo',
    amount: 250.0,
    date: new Date(2020, 6, 10),
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
