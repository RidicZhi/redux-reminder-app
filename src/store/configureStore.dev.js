import rootReducer from "../reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const configureStore = preloadState => {
  const store = createStore(
    rootReducer,
    preloadState,
    composeWithDevTools(applyMiddleware(logger))
  );
  return store;
};

export default configureStore;
