import React, { useReducer } from 'react';
import Reducer from './Reducer';

const LoginContext = React.createContext();

const LoginProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: localStorage.getItem('token') !== undefined || false,
    name: localStorage.getItem('name') || '',
  };
  return (
    <LoginContext.Provider value={useReducer(Reducer, initialState)}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
