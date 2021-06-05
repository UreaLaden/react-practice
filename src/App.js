import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    { title: 'Rent', amount: 3294.67, date: new Date(2021, 2, 15) },
    { title: 'Water', amount: 54.67, date: new Date(2021, 2, 1) },
    {
      title: 'Electricity',
      amount: 151.67,
      date: new Date(2021, 2, 14),
    },
    {
      title: 'Taekwondo',
      amount: 250.0,
      date: new Date(2021, 6, 10),
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
