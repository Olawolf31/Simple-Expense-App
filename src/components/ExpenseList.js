import React from 'react'


const ExpenseList = ({expense}) => {
  return (
    <>
      {expense.map((item) => {
        return (
          <div key={item.id} className="expense-item">
          {/*  <ExpenseDate date={item.date} /> */}
            <div className="expense-item__description">
              <h2>{item.title}</h2>
              <div className="expense-item__price">${item.amount}</div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default ExpenseList