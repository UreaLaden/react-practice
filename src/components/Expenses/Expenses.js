import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../Filter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2012');
  const expenseFilterHandler = (year) =>{
    setFilteredYear(year);
  }
  

  return (
    <div>
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onExpenseFiltered={expenseFilterHandler}/>
        {props.items.map((value, index) => {
          return (
            <div key={index}>
              <ExpenseItem
                title={value.title}
                amount={value.amount}
                date={value.date}
                />
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
