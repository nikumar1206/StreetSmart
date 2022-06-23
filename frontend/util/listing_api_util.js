export const fetchListings = (filters) =>
  $.ajax({
    url: `/api/listings?search=${filters}`,
    method: "get",
  });
