import * as NotesAPI from "../util/notes_api_util";
import { receiveListing } from "./listings_actions";

export const addNote = (listingId, note) => (dispatch) =>
  NotesAPI.addNote(listingId, note).then((listing) =>
    dispatch(receiveListing(listing))
  );
export const deleteNote = (listingId) => (dispatch) =>
  NotesAPI.deleteNote(listingId).then((listing) =>
    dispatch(receiveListing(listing))
  );
