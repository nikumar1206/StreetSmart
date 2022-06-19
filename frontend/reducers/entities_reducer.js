import { combineReducers } from "redux";

import usersReducer from "./user_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
});

export default entitiesReducer;
