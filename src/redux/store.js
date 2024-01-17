// import { legacy_createStore, applyMiddleware, compose } from "redux";  // Use createStore from "redux" instead of legacy_createStore
// import { thunk } from "redux-thunk";
// import logger from "redux-logger";
// import combineReducers from "./reducer/combineReducers";

// const store = legacy_createStore(
//   combineReducers,
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;
import { legacy_createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Import the named export 'thunk'
import logger from "redux-logger";
import combineReducers from "./reducer/combineReducers";

const store = legacy_createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
