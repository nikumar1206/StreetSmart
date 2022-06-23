export const fetchListings = (filters) =>
  $.ajax({
    url: `/api/listings?=${filters}`,
    method: "get",
  });
