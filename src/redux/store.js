// store.js
import { legacy_createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './reducer/rootReducers';

const store = legacy_createStore(
  rootReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
