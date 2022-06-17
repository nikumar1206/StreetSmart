import { combineReducers } from "redux";
import { benchesReducer } from "./benches_reducer";

import usersReducer from "./user_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer,
});

export default entitiesReducer;
