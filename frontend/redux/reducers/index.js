import { combineReducers } from "redux";
import productlineReducer from "./productlineReducer";
import productReducer from "./productReducer";
import userReducer from './userReducer';
import errorReducer from "./errorReducer";
export default combineReducers({
  user: userReducer,
  productlines: productlineReducer,
  products: productReducer,
  user: userReducer,
  error: errorReducer
});
