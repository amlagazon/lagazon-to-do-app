import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducer/users";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
