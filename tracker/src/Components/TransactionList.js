import React from "react";
import {GlobalContext} from "../Context/GlobalState.js";
import {Transaction} from "./Transaction.js";
import {useContext} from "react";

export const TransactionList = () => 
{
    const {transactions} = useContext(GlobalProvider);
    return (

        <ul id="list" className="list">
        {initialstate.map((transaction)=>{<Transaction  key={transactions.id}/>})}
        </ul>
    )
}