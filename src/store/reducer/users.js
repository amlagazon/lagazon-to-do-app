const initialState = {
  authenticated: {
    email: "test@gmail.com",
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return state;
    case "ADD_USER":
      return [...state, action.payload.user];
    default:
      return state;
  }
};

export default usersReducer;
