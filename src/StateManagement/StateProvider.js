import  React,{ createContext , useContext, useReducer    } from 'react';

// prepare the data layer for the application
export const StateContext = createContext();

// wrap our app and provider the data layer
export const StateProvider  = ({reducer, initialState, children}) => {
    <StateContext.Provider value={useReducer(reducer, initialState)} >

    {children}

    </StateContext.Provider>
};

// pull information from data layer and use in different components
//
export const useStateValue = () => useContext(StateContext);