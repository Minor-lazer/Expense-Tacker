import React from "react";
import {Transaction} from "./Transaction.js";
import {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState.js";

export const TransactionList = () => 
{
    const {transactions} = useContext(GlobalContext);
    return (

        <ul id="list" className="list">
        {transactions.map((transaction) => (<Transaction  key = {transaction.id} transaction = {transaction}/>))} 
        </ul>
    )
}