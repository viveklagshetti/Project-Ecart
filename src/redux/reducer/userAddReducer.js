let initialState = {
  user: null,
  error: "",
};

const userAddReducer = (state = initialState, action) => {
  if (action.type === "USER_ADD_SUCCESS") {
    return {
      user: action.payload,
      error: "",
    };
  } else if (action.type === "USER_ADD_ERROR") {
    return {
      error: action.payload,
      user: null,
    };
  }
  return state;
};
export default userAddReducer;
