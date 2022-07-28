import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ListerDescriptionContainer({
  listing,
  unSaveListing,
  saveListing,
  currentUser,
}) {
  const [isSaved, setSaved] = useState(listing.saved);
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
          onClick={() => dispatch(openModal("thankyou"))}
          className="share-button"
        >
          <AiOutlineMail />
          <span>Share</span>
        </button>
      </section>
      <p className="save-text-descript">
        This listing has been saved by {Math.floor(Math.random() * 500)} people.
      </p>
      {/* <div className="notes-container">
        <button className="notes-button">+ Add notes to this listing</button>
      </div> */}

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
        <div className="lister-info-bot">
          <img
            className="lister-info-img"
            src="https://www.google.com/favicon.ico"
            alt="google ico"
          />
          <h1 className="lister-info-title">{listing.lister.name}</h1>
        </div>
      </section>
    </div>
  );
}

export default ListerDescriptionContainer;
