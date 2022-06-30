import * as SaveListingAPI from "../util/save_listing_api_util";
import { receiveListings } from "./listings_actions";

export const createSavedListing = (userId, listingId) => (dispatch) =>
  SaveListingAPI.saveListing(userId, listingId).then((listings) =>
    dispatch(receiveListings(listings))
  );
export const unSaveListing = (userId, listingId) => (dispatch) =>
  SaveListingAPI.unsaveListing(userId, listingId).then((listings) =>
    dispatch(receiveListings(listings))
  );

export const fetchSavedListings = (userId) => {
  return (dispatch) =>
    SaveListingAPI.fetchSavedListings(userId).then((listings) =>
      dispatch(receiveListings(listings))
    );
};
