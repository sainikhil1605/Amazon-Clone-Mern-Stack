import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  let value;
  if (localStorage.getItem('cart')) {
    value = [...JSON.parse(localStorage.getItem('cart'))];
  } else {
    value = [];
  }

  return (
    <CartContext.Provider value={useReducer(Reducer, value)}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
