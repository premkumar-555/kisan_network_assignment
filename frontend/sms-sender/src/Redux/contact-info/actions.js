const SELECT_USER = "SELECT_USER";

// action
const selectUser = (payload) => ({ type: SELECT_USER, payload: payload });

export { SELECT_USER, selectUser };
