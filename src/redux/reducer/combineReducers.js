import { combineReducers } from "redux";
import { fetchAllProductReducer } from "./fetchAllProductReducer";
import { fetchSingleProductReducer } from "./fetchSingleProductReducer";
import { userAddReducer } from "./userAddReducer";
import loginUserReducer from "./loginUserReducer";
import handleCart from "./handleCart";
export default combineReducers({
  fetchAllProductReducer: fetchAllProductReducer,
  fetchSingleProductReducer: fetchSingleProductReducer,
  handleCart: handleCart,
  userAddReducer: userAddReducer,
  loginUserReducer: loginUserReducer,
});
