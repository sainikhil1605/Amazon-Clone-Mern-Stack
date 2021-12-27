import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import LoginReducer from './LoginReducer';
import SearchReducer from './SearchReducer';

const rootReducer = combineReducers({
  cart: CartReducer,
  login: LoginReducer,
  search: SearchReducer,
});
export default rootReducer;
