import logo from './logo.svg';
import {Header} from "./Components/header.js";
import {Expense} from "./Components/expense.js";
import {IncomeExpense} from "./Components/incomeExpense.js";
import { TransactionList } from './Components/TransactionList.js';
import { AddTransaction } from "./Components/AddTransaction.js"
import { GlobalProvider}  from "./Context/GlobalState.js";
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
    <Header/>
    <div class="container">
    <Expense/>
    <IncomeExpense/>
    <TransactionList/> 
    <AddTransaction/>
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
