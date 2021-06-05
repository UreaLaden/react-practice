import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  console.log(props.items);
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
