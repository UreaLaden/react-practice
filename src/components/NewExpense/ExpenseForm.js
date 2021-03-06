import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm =(props) =>{
  const [enteredTitle,setEnteredTitle] = useState('');
  const [enteredAmount,setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const[userInput,setUserInput] = useState({
  //   setEnteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:'',
  // })

  const titleChangeHandler = (event) =>{
      setEnteredTitle(event.target.value);
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // })
      // setUserInput((prevState) => {
      //   return {...prevState,entedTitle:event.target.value};
      // });
  };
  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    // })
  };
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:event.target.value,
    // })
  };

  const submitHandler = (event) =>{
    event.preventDefault(); //prevents page reload

    const expenseData = {
      title:enteredTitle,
      amount:+enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    // Clears the form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };



  const mainExpenseForm = 
  <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-06-01" step="2026-12-31"/>
        </div>
      </div>      
      <div className="new-expense__actions">
        <button type="button" onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>

  return mainExpenseForm;
}

export default ExpenseForm;
