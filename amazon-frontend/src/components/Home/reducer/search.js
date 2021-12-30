const intialState = {
  search: '',
};
const SearchReducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_SEARCH':
      return { search: payload };
    default:
      return state;
  }
};

export default SearchReducer;
