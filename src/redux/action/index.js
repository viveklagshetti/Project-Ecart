import * as api from "../../services/api";

//Fetch All Product Reducer Starts..
const fetchAllProductsSuccess = (products) => {
  return {
    type: "FETCH_ALL_PRODUCT_SUCCESS",
    payload: products,
  };
};

const fetchAllProductsError = (error) => {
  return {
    type: "FETCH_ALL_PRODUCT_ERROR",
    payload: error,
  };
};

export const fetchAllProducts = () => {
  return async (dispatch) => {
    try {
      const products = await api.fetchAllProducts();
      console.log("API Response:", products); // Log the response
      dispatch(fetchAllProductsSuccess(products));
    } catch (error) {
      console.error("API Error:", error); // Log the error
      dispatch(fetchAllProductsError(error));
    }
  };
};
//Fetch All Product Reducer ends..

//Fetch One Product Reducer Starts

export const fetchSingleProductSuccess = (singleProduct) => {
  return {
    type: "FETCH_SINGLE_PRODUCT_SUCCESS",
    payload: singleProduct,
  };
};

export const fetchSingleProductError = (error) => {
  return {
    type: "FETCH_SINGLE_PRODUCT_ERROR",
    payload: error,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const singleProduct = await api.fetchProductById(id); // Use your API function to fetch a single product
      dispatch(fetchSingleProductSuccess(singleProduct));
    } catch (error) {
      dispatch(fetchSingleProductError(error));
    }
  };
};
//Fetch One Product Reducer ends

//HandlCart Reducer Starts...
//add cart
export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};

// delete cart
// cartActions.js
export const delCart = (productId) => {
  return {
    type: "DELCART",
    payload: { id: productId },
  };
};

//clearcart
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const updateQuantity = (productId, newQuantity) => {
  return {
    type: "UPDATE_QUANTITY",
    payload: {
      productId,
      quantity: newQuantity,
    },
  };
};

//HandleCart Reducer Ends...

//UserAdd Reducer starts..
export const userAddSuccess = (User) => {
  return {
    type: "USER_ADD_SUCCESS",
    payload: User,
  };
};

export const userAddError = (error) => {
  return {
    type: "USER_ADD_ERROR",
    payload: error,
  };
};

export const userAdd = (email, password, name) => {
  return async (dispatch) => {
    try {
      const response = await api.addUser(email, password, name);
      console.log("User Added Response ", response);
      dispatch(userAddSuccess(response));
    } catch (error) {
      console.error("Error while adding user", error?.message);
      dispatch(userAddError(error));
    }
  };
};

//UserAdd Reducer ends...

//Login Reducer starts

export const loginSuccess = (userData) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userData,
  };
};

export const loginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const loginUser = function (email, password) {
  return async (dispatch) => {
    try {
      const res = await api.loginUserData(email, password);

      if (res) {
        console.log("Login Successfully");
        dispatch(loginSuccess(res));
      } else {
        throw new Error("Login failed"); // Throw an error when login fails
      }
    } catch (error) {
      console.error("Login Failed", error?.message);
      dispatch(loginError(error));
      throw error; // Re-throw the error to be caught in the component
    }
  };
};

//Login Reducer ends

export const userLogout = (user) => {
  return {
    type: "USER_LOGOUT",
    payload: user,
  };
};
