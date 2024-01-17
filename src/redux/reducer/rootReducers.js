import { combineReducers } from 'redux';
import fetchAllProductReducer from './fetchAllProductReducer';
import fetchSingleProductReducer from './fetchSingleProductReducer';
import userAddReducer from './userAddReducer';
import loginUserReducer from './loginUserReducer';
import handleCart from './handleCart';

const rootReducer = combineReducers({
  fetchAllProductReducer,
  fetchSingleProductReducer,
  userAddReducer,
  loginUserReducer,
  handleCart,
});

export default rootReducer;