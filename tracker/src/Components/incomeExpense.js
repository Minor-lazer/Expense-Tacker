import React from "react";

export const IncomeExpense = () =>
{
    return ( 
        <div class="low-inc-expenses">

           <div> 
            <h2>Income</h2>
            <p id="money-plus" className = "money-plus">+₹ 0.00</p>
           </div>

           <div> 
            <h2>Expense</h2>
            <p id="money-minus" className = "money-minus">-₹ 0.00</p>
           </div>

        </div>   
    )
}