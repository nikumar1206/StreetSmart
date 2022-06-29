import * as SaveListingAPI from "../util/save_listing_api_util";
import { receiveUser } from "./user_actions";
import { receiveListings } from "./listings_actions";

export const createSavedListing = (listingId) => {
  return (dispatch) => {
    return SaveListingAPI.saveListing(listingId).then((user) =>
      dispatch(receiveUser(user))
    );
  };
};

export const unSaveListing = (listingId) => {
  return (dispatch) => {
    return SaveListingAPI.unsaveListing(listingId).then((user) =>
      dispatch(receiveUser(user))
    );
  };
};

export const fetchSavedListings = (userId) => {
  return (dispatch) =>
    SaveListingAPI.fetchSavedListings(userId).then((listings) =>
      dispatch(receiveListings(listings))
    );
};
