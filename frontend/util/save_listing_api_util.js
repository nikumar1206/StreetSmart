export const saveListing = (listingId) =>
  $.ajax({
    method: "post",
    url: `/api/saved_listings`,
    data: { listing_id: listingId },
  });

export const unsaveListing = (listing_id) =>
  $.ajax({
    method: "delete",
    url: `/api/saved_listings/${listing_id}`,
  });

export const fetchSavedListings = (userId) =>
  $.ajax({
    method: "get",
    url: `/api/saved_listings/`,
    data: { user_id: userId },
  });
