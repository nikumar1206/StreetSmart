import * as SaveListingAPI from "../util/save_listing_api_util";
import { receiveListings } from "./listings_actions";

export const createSavedListing = (listingId) => (dispatch) =>
  SaveListingAPI.saveListing(listingId).then((listings) =>
    dispatch(receiveListings(listings))
  );
export const unSaveListing = (listingId) => (dispatch) =>
  SaveListingAPI.unsaveListing(listingId).then((listings) =>
    dispatch(receiveListings(listings))
  );

export const fetchSavedListings = (userId) => {
  return (dispatch) =>
    SaveListingAPI.fetchSavedListings(userId).then((listings) =>
      dispatch(receiveListings(listings))
    );
};
