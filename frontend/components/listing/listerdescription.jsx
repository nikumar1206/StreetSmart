import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart, FaTwitter } from "react-icons/fa";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNote } from "../../actions/notes_actions";

function ListerDescriptionContainer({
  listing,
  unSaveListing,
  saveListing,
  currentUser,
}) {
  const [isSaved, setSaved] = useState(() => listing.saved);
  const dispatch = useDispatch();
  const history = useHistory();

  const priceConvert = () => {
    let price = listing.price;
    return price.toLocaleString();
  };

  const toggleSaveIcon = () => {
    return listing.saved ? <FaHeart /> : <FaRegHeart />;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentUser) {
      return dispatch(openModal("login"));
    }
    isSaved
      ? dispatch(unSaveListing(listing.id))
      : dispatch(saveListing(listing.id));
    setSaved(!isSaved);
  };

  const handleNotesButton = () => {
    if (!currentUser) {
      dispatch(openModal("login"));
      return;
    }
    dispatch(addNote(listing.id, { body: "wassup" }));
  };
  return (
    <div className="lister-descript-container">
      <h1 className="listing-descript-name">{listing.name}</h1>
      <h1 className="listing-descript-price">$ {priceConvert()}</h1>

      <div className="details-info">
        <ul className="details-info-breakdown">
          <li className="det-cell-1-child">
            {listing.beds + listing.baths + 1} rooms
          </li>
          <li className="det-cell-2-child">{listing.beds} beds</li>
          <li className="det-cell-3-child">{listing.baths} baths</li>
        </ul>
      </div>

      <section className="details-buttons">
        <button className="save-button" onClick={handleSave}>
          {toggleSaveIcon()}
          <span>{isSaved ? "saved" : "save"}</span>
        </button>
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet/?text=Hey%20everyone,%0ACheck%20out%20this%20listing%20I%20found%20over%20at%20https://streetsmart1.herokuapp.com/listings/${listing.id}`,
              "_blank"
            )
          }
          className="share-button"
        >
          <FaTwitter />
          <span>Share</span>
        </button>
      </section>
      <p className="save-text-descript">
        This listing has been saved by {listing.numSaves}{" "}
        {listing.numSaves == 1 ? "person" : "people"}.
      </p>
      {!listing.note ? (
        <div className="notes-container">
          <button onClick={handleNotesButton} className="notes-button">
            + Add notes to this listing
          </button>
        </div>
      ) : (
        <div className="notes-container">{listing.note}</div>
      )}

      <section className="lister-info">
        {listing.rent_bool ? (
          <button
            onClick={() => dispatch(openModal("thankyou"))}
            className="contact-lister tour"
          >
            Request a tour
          </button>
        ) : (
          <button
            onClick={() => dispatch(openModal("thankyou"))}
            className="contact-lister schedule"
          >
            Schedule a Showing
          </button>
        )}
        {currentUser && listing.lister_id === currentUser.id ? (
          <button
            onClick={() => history.push(`/listings/${listing.id}/edit`)}
            className="edit-listing-button"
          >
            Update Listing
          </button>
        ) : (
          <></>
        )}
        <>
          <div className="lister-info-bot">
            <img
              className="lister-info-img"
              src={
                listing.lister_id === 2
                  ? "https://streetsmart-safeassets.s3.amazonaws.com/justintimberlake.jpg"
                  : "https://www.google.com/favicon.ico"
              }
              alt="User Pic Here"
            />
            <h1 className="lister-info-title">
              Realtor: {listing.lister.name}
            </h1>
          </div>
        </>
      </section>
    </div>
  );
}

export default ListerDescriptionContainer;
