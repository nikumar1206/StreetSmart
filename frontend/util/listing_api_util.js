export const fetchListings = (filters, amenities) =>
  $.ajax({
    url: `/api/listings/${filters}`,
    method: "get",
    data: { amenities },
  });

export const fetchListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: "get",
  });

export const createListing = (listing) =>
  $.ajax({
    url: `/api/listings/`,
    method: "post",
    data: listing,
    contentType: false,
    processData: false,
  });

export const updateListing = (listing) =>
  $.ajax({
    url: `/api/listings/${listing.id}`,
    method: "patch",
    data: listing,
    contentType: false,
    processData: false,
  });

export const deleteListing = (listingId) =>
  $.ajax({
    url: `/api/listings/${listingId}`,
    method: "delete",
  });

export const fetchUserListings = (userId) =>
  $.ajax({
    url: `/api/users/${userId}/listings`,
    method: "get",
  });
