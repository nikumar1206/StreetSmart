import {
  CLEAR_LISTING_ERRORS,
  RECEIVE_LISTING_ERRORS,
} from "../actions/listings_actions";

const _nullErrors = [];

export const listingErrorReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    case CLEAR_LISTING_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
export default listingErrorReducer;
