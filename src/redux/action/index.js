import * as api from "../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate;
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

// redux/action.js

export const userAdd = (email, password, name) => {
  return async (dispatch) => {
    try {
      // Check if the user with the given email already exists
      const existingUser = await api.loginUserData(email, password);

      if (existingUser) {
        // If the user already exists, throw an error
        throw new Error("User already exists");
      }

      // If the user doesn't exist, proceed with user registration
      const response = await api.addUser(email, password, name);
      console.log("User Added Response ", response);
      dispatch(userAddSuccess(response));

      // Show success toast and navigate to the login page
      toast.success("Registered Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/login");
    } catch (error) {
      console.error("Error while adding user", error?.message);

      // Show error toast if the user already exists
      if (error.message === "User already exists") {
        toast.error("User already exists!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        // Show a general error toast for other errors
        toast.error("Email is already registered!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
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
