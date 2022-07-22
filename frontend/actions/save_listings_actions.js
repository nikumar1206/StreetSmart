import * as SaveListingAPI from "../util/save_listing_api_util";
import { receiveListings, receiveListing } from "./listings_actions";

export const saveListing = (listingId) => (dispatch) =>
  SaveListingAPI.saveListing(listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const unSaveListing = (listingId) => (dispatch) =>
  SaveListingAPI.unsaveListing(listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );

export const fetchSavedListings = (userId) => (dispatch) =>
  SaveListingAPI.fetchSavedListings(userId).then((listings) => {
    dispatch(receiveListings(listings));
    return listings;
  });
