import * as ListingAPI from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const CLEAR_LISTINGS = "CLEAR_LISTINGS";
export const CLEAR_LISTING = "CLEAR_LISTING";

export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});
export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  listing,
});
export const removeListings = () => ({
  type: CLEAR_LISTINGS,
});
export const removeListing = () => ({
  type: CLEAR_LISTING,
});
export const fetchListings = (filters) => (dispatch) =>
  ListingAPI.fetchListings(filters).then((listings) =>
    dispatch(receiveListings(listings))
  );
export const fetchListing = (listingId) => (dispatch) =>
  ListingAPI.fetchListing(listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );

export const createListing = (listing) => (dispatch) =>
  ListingAPI.createListing(listing).then((listing) =>
    dispatch(receiveListing(listing))
  );

export const updateListing = (listing) => (dispatch) =>
  ListingAPI.updateListing(listing).then((listing) =>
    dispatch(receiveListing(listing))
  );

export const deleteListing = (listingId) => (dispatch) =>
  ListingAPI.deleteListing(listingId).then(() =>
    dispatch(removeListing(listingId))
  );
