import React,{useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";


export function Balance () 
{
   const {transactions} = useContext(GlobalContext);

   const amount = transactions.map((transaction) => transaction.amount)

   const total = amount.reduce((tot,cur)=>(tot = tot+cur) , 0).toFixed(2);

   return (
      <> 
      <h1>Your Balance</h1>,      
      <h4>${total}</h4>
      </>
           
   )

} 