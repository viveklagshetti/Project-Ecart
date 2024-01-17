// Fetching data
import axios from "axios";

const BASE_URL = "https://e-cart-zfz3.onrender.com/products";
const USER_ADD_URL = "https://e-cart-zfz3.onrender.com/users";
// function for fetching all products
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// function for fetching a single product, we have to pass the product id
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//create user
export const addUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${USER_ADD_URL}`, { email, password, name });
    console.log("User Created Successfully");
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

// login user
export const loginUserData = async function (email,password) {
  try {
    const res = await axios.get(`${USER_ADD_URL}`);
    const user = res.data.find(user => user.email === email && user.password === password);

    if (user) {
      // console.log(user);
      console.log("Login SuccessFully");
      return user;
    } else {
      console.log(user);
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.log(error?.message);
    throw error;
  }
};

