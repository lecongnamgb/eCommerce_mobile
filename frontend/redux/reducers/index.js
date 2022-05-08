import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productlineReducer from "./productlineReducer";
import productReducer from "./productReducer";
export default combineReducers({
  user: userReducer,
  productlines: productlineReducer,
  products: productReducer
});
