import rootReducer from "../reducer";
import { createStore } from "redux";

const configureStore = preloadState => {
  const store = createStore(rootReducer, preloadState);
  return store;
};

export default configureStore;
