export const fetchListings = (filters) =>
  $.ajax({
    url: "/api/listings",
    method: "get",
    data: { filters },
  });
