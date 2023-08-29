import { useReducer, useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function expenseReducer(state,action){
  if(action.type=="ADD"){
    return [action.expense,...state];
  }
  else if(action.type=="REMOVE"){
    return state.filter((expense,index)=> index!== action.index)
  }
}
function App() {
  // Remove the useState hook and replace it with useReducer hook
  // Implement the functionality to add and remove the transaction in reducer function
  // const [expenses, setExpenses] = useState([]);
  const [expenses,dispatch] = useReducer(expenseReducer,[])

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm expenses={expenses} dispatch ={dispatch}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} dispatch ={dispatch} />
          <ExpenseList expenses={expenses} dispatch ={dispatch}/>
        </div>
      </div>
    </>
  );
}

export default App;
