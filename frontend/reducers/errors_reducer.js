import { combineReducers } from "redux";
import listingErrorReducer from "./listing_errors_reducer";

import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  listings: listingErrorReducer,
});

export default errorsReducer;
