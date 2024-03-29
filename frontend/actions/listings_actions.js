import * as ListingAPI from "../util/listing_api_util";

export const RECEIVE_LISTINGS = "RECEIVE_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const CLEAR_LISTINGS = "CLEAR_LISTINGS";
export const CLEAR_LISTING = "CLEAR_LISTING";
export const RECEIVE_LISTING_ERRORS = "RECEIVE_LISTING_ERRORS";
export const CLEAR_LISTING_ERRORS = "CLEAR_LISTING_ERRORS";

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

export const removeListing = (listingId) => ({
  type: CLEAR_LISTING,
  listingId,
});

export const recieveListingErrors = (errors) => ({
  type: RECEIVE_LISTING_ERRORS,
  errors,
});

export const clearListingErrors = () => ({
  type: CLEAR_LISTING_ERRORS,
});

export const fetchListings = (filters, amenities) => async (dispatch) => {
  try {
    let res = await ListingAPI.fetchListings(filters, amenities);
    dispatch(receiveListings(res));
  } catch (error) {
    console.log(error);
  }
};

export const fetchListing = (userId) => async (dispatch) => {
  try {
    let res = await ListingAPI.fetchListing(userId);
    dispatch(receiveListing(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createListing = (listing) => async (dispatch) => {
  try {
    let res = await ListingAPI.createListing(listing);
    dispatch(receiveListing(res));
    return res;
  } catch (error) {
    console.log(error);
    dispatch(recieveListingErrors(error.responseJSON));
  }
};

export const updateListing = (listing) => async (dispatch) => {
  try {
    let res = await ListingAPI.updateListing(listing);
    dispatch(receiveListing(res));
    return res;
  } catch (err) {
    dispatch(recieveListingErrors(err.responseJSON));
  }
};

export const deleteListing = (listingId) => (dispatch) =>
  ListingAPI.deleteListing(listingId).then(() =>
    dispatch(removeListing(listingId))
  );

export const fetchUserListings = (userId) => (dispatch) =>
  ListingAPI.fetchUserListings(userId).then((listings) =>
    dispatch(receiveListings(listings))
  );
