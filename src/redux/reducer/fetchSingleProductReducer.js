// fetchSingleProductReducer.js

const initialState = {
  singleProduct: {},
  error: "",
};

const fetchSingleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_PRODUCT_SUCCESS":
      return {
        singleProduct: action.payload,
        error: "",
      };
    case "FETCH_SINGLE_PRODUCT_ERROR":
      return {
        error: action.payload,
        singleProduct: {},
      };
    default:
      return state;
  }
};

export default fetchSingleProductReducer;
