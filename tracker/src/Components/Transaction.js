import React from "react";
import { GlobalContext, GlobalProvider } from "../Context/GlobalState";
import {useContext} from "react";

export const Transaction = ({transaction}) => 

{
  const {deleteTransaction} = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";   
    return ( 
    <li className ={ transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text} Cash<span>{sign}${Math.abs(transaction.amount)}</span><button
       onClick = {() => deleteTransaction (transaction.id) } className = "delete-btn">
        x</button>
    </li>
    )
}