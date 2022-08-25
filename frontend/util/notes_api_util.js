export const addNote = (listingId, note) =>
  $.ajax({
    method: "post",
    url: `/api/listings/${listingId}/notes`,
    data: { note },
  });

export const deleteNote = (listingId, noteId) =>
  $.ajax({
    method: "delete",
    url: `/api/listings/${listingId}/notes/${noteId}`,
  });

export const editNote = (listingId, note) =>
  $.ajax({
    method: "patch",
    url: `/api/listings/${listingId}/notes/${note.noteId}`,
    data: { note },
  });
