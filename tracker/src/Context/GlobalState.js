import React, { useContext } from "react";
import {useState,createContext,useReducer} from "react";

const initialState = [ 
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
] 

export const GlobalContext = createContext();

export const GlobalProvider = () => 
{
    const [state,dispatch] = useReducer [AppReducer,initialState];

    <useContext.GlobalProvider value={{transactions:state.transactions}}>
    {children}
    </useContext.GlobalProvider>
}

