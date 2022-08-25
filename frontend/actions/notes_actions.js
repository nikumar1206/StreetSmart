import * as NotesAPI from "../util/notes_api_util";
import { receiveListing } from "./listings_actions";

export const addNote = (listingId, note) => (dispatch) =>
  NotesAPI.addNote(listingId, note).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const editNote = (listingId, note) => (dispatch) =>
  NotesAPI.editNote(listingId, note).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const deleteNote = (listingId, noteId) => (dispatch) =>
  NotesAPI.deleteNote(listingId, noteId).then((listing) =>
    dispatch(receiveListing(listing))
  );
