import React, { createContext, useReducer } from 'react';

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SEARCH':
      return payload;
    default:
      return state;
  }
};

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const value = '';

  return (
    <SearchContext.Provider value={useReducer(Reducer, value)}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
