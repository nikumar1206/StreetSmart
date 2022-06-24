export const fetchSavedListings = (userId) =>
  $.ajax({
    url: `/api/users/${userId}/saved_listings`,
    method: "get",
  });

export const deleteSavedListing = (userId, savedListingId) =>
  $.ajax({
    url: `/api/users/${userId}/saved_listings/${savedListingId}`,
    method: "delete",
  });
