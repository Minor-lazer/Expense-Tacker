import React from "react";
import {useState,useContext} from "react";
import {GlobalContext} from "../Context/GlobalState.js";

export const AddTransaction = () => 
{

  const [amount,setAmount] = useState("0");
  const [text,setText] = useState();
  const {addTransaction} = useContext(GlobalContext)

  function onSubmit (e) { 
     e.preventDefault()

     const newTransaction = 
     {
        id:Math.floor(Math.random()*1000001),
        text,
        amount:+amount
     }

     addTransaction(newTransaction);
  }

  return ( 
    <form onSubmit={onSubmit}>
    <div className = "form-control">
      <label htmlFor = "text" value = {text} onChange = {(e)=>setText(e.target.value)}> Text </label>
      <input type="text"  placeholder="Enter text..." onChange={(e)=>setAmount(amount)}/>
    </div>
    <div className ="form-control">
      <label for="amount"
        >Amount <br/>
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>setAmount(amount)} />
    </div>
    <button className = "btn" > Add Transaction </button>
</form>
  )
}