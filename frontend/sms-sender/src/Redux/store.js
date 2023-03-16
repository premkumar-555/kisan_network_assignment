import { createStore } from "redux";
import { contactInfoReducer } from "./contact-info/reducer";

// store
const store = createStore(contactInfoReducer);

export { store };
