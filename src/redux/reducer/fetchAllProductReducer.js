let initialState = {
  products: [],
  error: "",
};

export const fetchAllProductReducer = (state = initialState, action) => {
  if (action.type === "FETCH_ALL_PRODUCT_SUCCESS") {
    return {
      products: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_ALL_PRODUCT_ERROR") {
    return {
      error: action.payload,
      products: [],
    };
  }
  return state;
};
