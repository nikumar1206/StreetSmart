import { RECEIVE_LISTING_ERRORS } from "../actions/listings_actions";

const _nullErrors = [];

export const listingErrorReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
export default listingErrorReducer;
