import { RECEIVE_LISTINGS } from "../actions/listings_actions";

export const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return Object.assign({}, action.listings);
    default:
      return state;
  }
};
export default listingsReducer;
