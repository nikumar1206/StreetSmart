import { RECEIVE_LISTINGS, RECEIVE_LISTING } from "../actions/listings_actions";

export const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      Object.assign(nextState, action.listings);
      return nextState;
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing;
      return nextState;
    default:
      return state;
  }
};
export default listingsReducer;
