import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiBed, BiBath } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  saveListing,
  unSaveListing,
} from "../../actions/save_listings_actions";
import { openModal } from "../../actions/modal_actions";
import { useHistory } from "react-router-dom";
import { useCurrentUser } from "../../util/selectors";

function ListingItemComponent({ listing }) {
  const [saveToggle, setSaveToggle] = useState(listing.saved);
  const history = useHistory();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();
  const priceConvert = () => {
    let price = listing.price;
    return price.toLocaleString();
  };

  useEffect(() => {
    setSaveToggle(listing.saved);
  }, [listing.saved]);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      return dispatch(openModal("login"));
    }

    saveToggle
      ? dispatch(unSaveListing(listing.id))
      : dispatch(saveListing(listing.id));
  };

  const handleClick = () => {
    history.push(`/listings/${listing.id}`);
  };

  return (
    <li className="searchCardList-item" onClick={handleClick}>
      <div className="listing-item-thumbnail">
        <img src={listing.imageUrl} />
      </div>
      <div className="listing-item-bottom">
        <div className="listing-item-top-info">
          <span className="listing-brief-info">
            {listing.property_type} in {listing.neighborhood}
          </span>
          <p className="li-address">{listing.name}</p>
          <p className="li-price">${priceConvert()}</p>
        </div>

        <div className="heart-container">
          {saveToggle ? (
            <FaHeart className="heartsave-btn" onClick={handleSave} />
          ) : (
            <FaRegHeart className="heartsave-btn" onClick={handleSave} />
          )}
        </div>
      </div>

      <div className="li-lowerblock">
        <ul className="li-lowerblock-info">
          <li className="first-child-li">
            {listing.beds + " Beds"}
            <BiBed />
          </li>
          <li>
            {listing.baths + " Baths"}
            <BiBath />
          </li>
        </ul>
        <p>Listing by {listing.lister.name}</p>
      </div>
    </li>
  );
}
export default ListingItemComponent;
