import * as ListingAPI from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const fetchListings = (filters) => (dispatch) =>
  ListingAPI.fetchListings(filters).then((listings) =>
    dispatch(receiveListings(listings))
  );
