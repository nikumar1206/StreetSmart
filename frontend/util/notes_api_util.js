export const addNote = (listingId, note) =>
  $.ajax({
    method: "post",
    url: `/api/listings/${listingId}/notes`,
    data: { note },
  });

export const deleteNote = (listingId) =>
  $.ajax({
    method: "delete",
    url: `/api/listings/${listingId}/notes/:id(.:format)`,
    data: {},
  });
