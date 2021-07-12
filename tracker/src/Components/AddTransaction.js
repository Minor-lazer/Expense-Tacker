import React from "react";
import {useState} from "react";

export const AddTransaction = () => 
{

  const [price,setPrice] = useState("0");
  return ( 
    <form>
    <div className = "form-control">
      <label htmlFor = "text">Text</label>
      <input type="text"  placeholder="Enter text..." onChange={(e)=>setPrice(price)}/>
    </div>
    <div className ="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="number" id="amount" placeholder="Enter amount..." onChange={(e)=>setPrice(price)} />
    </div>
    <button className = "btn" > Add Transaction </button>
</form>
  )
}