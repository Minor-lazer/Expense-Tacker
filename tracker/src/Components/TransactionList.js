import React from "react";
import {GlobalContext} from "../Context/GlobalState.js";
import {Translation} from "./Components/Translation.js";

export const TransactionList = () => 
{
    const {transactions} = useContext(GlobalProvider);
    return (

        <li id="list" className="list">
        {initialstate.map((transaction)=>{<Translation transaction = {transactions}/>})
        </li>
    )
}