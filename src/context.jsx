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

    const clearCart =()=>{
        dispatch({type:'CLEAR_CART'})
    }
    const removeItem =(id)=>{
        dispatch({type:'REMOVE',payload:id})
    }
    const increaseItem =(id)=>{
        dispatch({type:'INCREASE',payload:id})
    }
    const decreaseItem =(id)=>{
        dispatch({type:'DECREASE',payload:id})
    }
    return(
        <AppContext.Provider
        value={{
            ...state,
            clearCart,
            removeItem,
            increaseItem,
            decreaseItem
            }}>{children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider};