import { SELECT_USER } from "./actions";

// initial state
const initState = {
  selectedContact: {},
};

const contactInfoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SELECT_USER:
      state = { ...state, selectedContact: { ...payload } };
      return state;
      break;
    default:
      return state;
      break;
  }
};

export { contactInfoReducer };
