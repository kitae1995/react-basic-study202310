import React from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '파인애플',
      price: 5000,
      date: new Date(2023, 3, 23),
    },
    {
      title: '오렌지',
      price: 1000,
      date: new Date(2023, 10, 23),
    },
    {
      title: '낑깡',
      price: 500,
      date: new Date(2023, 11, 23),
    },
  ];

  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
