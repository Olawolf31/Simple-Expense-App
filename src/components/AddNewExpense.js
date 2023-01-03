import React, {useState} from 'react'

const AddNewExpense = ({allExpenses}) => {

    const [userInput, setUserInput] = useState([
        {
          title: '',
          amount: '',
          date: '',
        },
      ]);
    
      const changeHandler = (event) => {
    
        const { name, value} = event.target;
    
        setUserInput((prevInput) => {
          return {
            ...prevInput,
            [name]: value 
          };
        });
      };


      //new expense added to list
/*       const saveExpenseData = () => {
        const expenseData = {
          ...userInput, 
          id: Math.random().toString()
        };
        console.log(expenseData)
      
      } */

      const submitHandler = (event) => {
        event.preventDefault();
    
        allExpenses(userInput)
        setUserInput("");
      };

  return (
    <div>
    <div className="add-new">
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title || ""}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={userInput.amount || ""}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2025-12-31"
            value= {userInput.date || ""}
            onChange={changeHandler}
          />
        </div>
        <div>
          <button className="btn">Add Expense</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddNewExpense