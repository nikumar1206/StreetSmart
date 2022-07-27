import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { openModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function ListerDescriptionContainer(props) {
  const [saveToggle, setSaveToggle] = useState(props.listing.saved);
  const dispatch = useDispatch();
  const history = useHistory();
  const priceConvert = () => {
    let price = props.listing.price;
    return price.toLocaleString();
  };

  const toggleSaveIcon = () => {
    return props.listing.saved ? <FaHeart /> : <FaRegHeart />;
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!props.currentUser) {
      return dispatch(openModal("login"));
    }
    saveToggle
      ? props.unSaveListing(props.listing.id)
      : props.saveListing(props.listing.id);
    setSaveToggle(!saveToggle);
  };

  return (
    <div className="lister-descript-container">
      <h1 className="listing-descript-name">{props.listing.name}</h1>
      <h1 className="listing-descript-price">$ {priceConvert()}</h1>

      <div className="details-info">
        <ul className="details-info-breakdown">
          <li className="det-cell-1-child">{props.listing.beds + 1} rooms</li>
          <li className="det-cell-2-child">{props.listing.beds} beds</li>
          <li className="det-cell-3-child">{props.listing.baths} baths</li>
        </ul>
      </div>

      <section className="details-buttons">
        <button className="save-button" onClick={handleSave}>
          {toggleSaveIcon()}
          <span>{saveToggle ? "saved" : "save"}</span>
        </button>
        <button className="share-button">
          <AiOutlineMail />
          <span>Share</span>
        </button>
      </section>
      <p className="save-text-descript">
        This listing has been saved by {Math.floor(Math.random() * 500)} people.
      </p>
      <div className="notes-container">
        <Link to="/">
          <button className="notes-button">+ Add notes to this listing</button>
        </Link>
      </div>

      <section className="lister-info">
        {props.listing.rent_bool ? (
          <button className="contact-lister tour">Request a tour</button>
        ) : (
          <button className="contact-lister schedule">
            Schedule a Showing
          </button>
        )}
        {props.currentUser &&
        props.listing.lister_id === props.currentUser.id ? (
          <button
            onClick={() => history.push(`/listings/${props.listing.id}/edit`)}
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
          <h1 className="lister-info-title">{props.listing.lister.name}</h1>
        </div>
      </section>
    </div>
  );
}

export default ListerDescriptionContainer;
