import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  saveListing,
  unSaveListing,
} from "../../actions/save_listings_actions";

function ListingItemComponent(props) {
  const [saveToggle, setSaveToggle] = useState(props.listing.saved);
  const dispatch = useDispatch();
  const priceConvert = () => {
    let price = props.listing.price;
    return price.toLocaleString();
  };

  useEffect(() => {
    setSaveToggle(props.listing.saved);
  }, [props.listing.saved]);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    saveToggle
      ? dispatch(unSaveListing(props.listing.id))
      : dispatch(saveListing(props.listing.id));
  };

  const handleClick = () => {
    props.history.push(`/listings/${props.listing.id}`);
  };

  return (
    <li className="searchCardList-item" onClick={handleClick}>
      <div className="listing-item-thumbnail">
        <img src={props.listing.imageUrl} />
      </div>
      <div className="listing-item-bottom">
        <div className="listing-item-top-info">
          <span className="listing-brief-info">
            {props.listing.property_type} in {props.listing.neighborhood}
          </span>
          <p className="li-address">{props.listing.name}</p>
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
          <li className="first-child-li">{props.listing.beds} Beds</li>
          <li>{props.listing.baths} Baths</li>
        </ul>
        <p>Listing by {props.listing.lister.name}</p>
      </div>
    </li>
  );
}

export default withRouter(ListingItemComponent);
