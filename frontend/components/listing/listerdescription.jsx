import React from "react";
import { useState } from "react";
import { FaRegHeart, FaHeart, FaTwitter } from "react-icons/fa";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import NotesComponent from "./notes";

const ListerDescriptionContainer = ({
  listing,
  unSaveListing,
  saveListing,
  currentUser,
}) => {
  const {
    price,
    id,
    name,
    beds,
    baths,
    numSaves,
    lister_id,
    saved,
    rent_bool,
    lister,
  } = listing;
  const [isSaved, setSaved] = useState(() => saved);
  const dispatch = useDispatch();
  const history = useHistory();

  const priceConvert = () => {
    const correctedPrice = `$${price.toLocaleString()}`;
    return rent_bool ? (
      <h1 className="listing-descript-price">
        {correctedPrice} <span> per month</span>
      </h1>
    ) : (
      <h1 className="listing-descript-price">{correctedPrice}</h1>
    );
  };

  const toggleSaveIcon = () => {
    return saved ? <FaHeart /> : <FaRegHeart />;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!currentUser) {
      return dispatch(openModal("login"));
    }
    isSaved ? dispatch(unSaveListing(id)) : dispatch(saveListing(id));
    setSaved(!isSaved);
  };

  return (
    <div className="lister-descript-container">
      <h1 className="listing-descript-name">{name}</h1>
      {priceConvert()}

      <div className="details-info">
        <ul className="details-info-breakdown">
          <li className="det-cell-1-child">{beds + baths + 1} rooms</li>
          <li className="det-cell-2-child">{beds} beds</li>
          <li className="det-cell-3-child">{baths} baths</li>
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
              `https://twitter.com/intent/tweet/?text=Hey%20everyone,%0ACheck%20out%20this%20listing%20I%20found%20over%20at%20https://streetsmart1.herokuapp.com/listings/${id}`,
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
        This listing has been saved by {numSaves}{" "}
        {numSaves == 1 ? "person" : "people"}.
      </p>

      <NotesComponent
        listing={listing}
        currentUser={currentUser}
        openModal={openModal}
      />
      <section className="lister-info">
        {rent_bool ? (
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
        {currentUser && lister_id === currentUser.id ? (
          <button
            onClick={() => history.push(`/listings/${id}/edit`)}
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
                lister_id === 2
                  ? "https://streetsmart-safeassets.s3.amazonaws.com/justintimberlake.jpg"
                  : "https://www.google.com/favicon.ico"
              }
              alt="User Pic Here"
            />
            <h1 className="lister-info-title">Realtor: {lister.name}</h1>
          </div>
        </>
      </section>
    </div>
  );
};

export default ListerDescriptionContainer;
