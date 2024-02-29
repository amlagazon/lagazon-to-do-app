export const getUsers = () => ({
  type: "GET_USERS",
});

export const addUser = (data) => ({
  type: "ADD_USER",
  payload: {
    user: data,
  },
});
