import { createStore, applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import { defaultTo } from "lodash";

/*
Export a `configureStore` function that takes in a `preloadedState` parameter
and returns a store created with the `RootReducer`, `preloadedState`, and
`thunk` middleware.
*/

export const configureStore = (preloadedState) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(thunk));
};

export default configureStore;
