/* eslint-disable react/prop-types */
import React, { createContext, useReducer,useContext } from 'react'
import Data from './data.js';
import reducer from './reducer';

const AppContext=createContext();

const initialState={
    loading: false,
    cart:Data,
    total:0,
    amount:0
};

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const clearCar =()=>{
        dispatch({type:'CLEAR_CART'})
    }
    return(
        <AppContext.Provider
        value={{...state,}}>{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider};