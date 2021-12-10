import React, { createContext, useReducer } from 'react';

const Context = createContext();
const checkProduct = (cart, product) => {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i]._id === product._id) {
      return i;
    }
  }
  return -1;
};
const reducer = (state, action) => {
  const { type, payload } = action;
  const index = checkProduct(state, payload);
  const tempCart = [...state];
  switch (type) {
    case 'ADD_TO_CART':
      if (index === -1) {
        const tempObj = { ...payload };
        tempObj.quantity = 1;
        localStorage.setItem('cart', JSON.stringify([...state, tempObj]));
        return [...state, tempObj];
      }

      tempCart[index] = {
        ...tempCart[index],
        quantity: tempCart[index].quantity + 1,
      };
      localStorage.setItem('cart', JSON.stringify(tempCart));
      return tempCart;

    default:
      return state;
  }
};
const Provider = ({ children }) => {
  let value;
  if (localStorage.getItem('cart')) {
    value = [...JSON.parse(localStorage.getItem('cart'))];
  } else {
    value = [];
  }

  return (
    <Context.Provider value={useReducer(reducer, value)}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
