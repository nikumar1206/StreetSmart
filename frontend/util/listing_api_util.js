export const fetchListings = (filters) =>
  $.ajax({
    url: `/api/listings/${filters}`,
    method: "get",
  });

export const fetchListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: "get",
  });
