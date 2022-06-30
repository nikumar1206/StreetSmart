export const saveListing = (userId, listingId) =>
  $.ajax({
    method: "post",
    url: `/api/users/${userId}/saved_listings`,
    data: { listing_id: listingId },
  });

export const unsaveListing = (userId, saveListingId) =>
  $.ajax({
    method: "delete",
    url: `/api/users/${userId}/saved_listings/${saveListingId}`,
  });

export const fetchSavedListings = (userId) =>
  $.ajax({
    method: "get",
    url: `/api/users/${userId}/saved_listings/`,
  });
