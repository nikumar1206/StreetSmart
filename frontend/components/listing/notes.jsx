import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote, deleteNote, editNote } from "../../actions/notes_actions";
import { FaRegEdit } from "react-icons/fa";

const NotesComponent = (props) => {
  const { listing, currentUser, openModal } = props;
  const [body, setBody] = useState("");
  const [addDiv, setAddDivContainer] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listing.note) {
      setBody(listing.note);
    }
  }, []);

  const handleNotesButton = () => {
    if (!currentUser) {
      dispatch(openModal("login"));
      return;
    }
    setAddDivContainer(true);
  };

  const handleUpdate = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listing.note) {
      if (body == "") {
        dispatch(deleteNote(listing.id, listing.noteId));
      } else {
        dispatch(editNote(listing.id, { noteId: listing.noteId, body }));
      }
    } else {
      dispatch(addNote(listing.id, { body }));
    }
    setAddDivContainer(false);
  };

  const addNoteDiv = (
    <div className="notes-container">
      <form className="addNote" onSubmit={handleSubmit}>
        <label htmlFor="noteinput">Your Note</label>
        <textarea
          className="notes-input"
          value={body}
          id="noteinput"
          onChange={handleUpdate}
        />
        <button className="save-note-btn" ype="submit">
          Save
        </button>
      </form>
    </div>
  );

  if (addDiv) {
    return addNoteDiv;
  } else {
    if (listing.note) {
      return (
        <div className="notes-container filled">
          <span>{listing.note}</span>
          <FaRegEdit
            className="edit-icon-notes"
            onClick={() => setAddDivContainer(true)}
          />
        </div>
      );
    } else {
      return (
        <div className="notes-container">
          <button onClick={handleNotesButton} className="notes-button">
            + Add notes to this listing
          </button>
        </div>
      );
    }
  }
};

export default NotesComponent;
