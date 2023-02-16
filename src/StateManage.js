import React, { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the dataLayer to the app
export const StateManage = ({
    reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// this pulls the info from the dataLayer
export const useStateValue = () => useContext(StateContext);