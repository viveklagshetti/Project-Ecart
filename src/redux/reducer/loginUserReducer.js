import { toast } from "react-toastify";

const initialState = {
  user: null,
  token: "",
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_ERROR":
      console.error("Login Failed", action.payload?.message);
      return state;
    case "USER_LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default loginUserReducer;
