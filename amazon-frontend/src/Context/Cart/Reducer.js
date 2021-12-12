const checkProduct = (cart, product) => {
  for (let i = 0; i < cart.length; i += 1) {
    if (product !== undefined && cart[i]._id === product._id) {
      return i;
    }
  }
  return -1;
};
const Reducer = (state, action) => {
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
    case 'CLEAR_CART':
      return [];
    case 'REMOVE_FROM_CART':
      tempCart.splice(payload.index, 1);
      return tempCart;
    case 'DECREASE_QUANTITY':
      if (tempCart[payload].quantity === 1) {
        tempCart.splice(payload, 1);
        return tempCart;
      }
      tempCart[payload] = {
        ...tempCart[payload],
        quantity: tempCart[payload].quantity - 1,
      };

      return tempCart;

    default:
      return state;
  }
};

export default Reducer;
