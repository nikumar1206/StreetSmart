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

const ListingItemComponent = ({
  listing: {
    saved,
    price,
    id,
    imageUrl,
    name,
    neighborhood,
    beds,
    baths,
    rent_bool,
    property_type,
    lister,
  },
}) => {
  const [saveToggle, setSaveToggle] = useState(saved);
  const history = useHistory();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  const priceConvert = () => {
    const correctedPrice = `$${price.toLocaleString()}`;
    return rent_bool ? (
      <p className="li-price">
        {correctedPrice} <span> per month</span>
      </p>
    ) : (
      <p className="li-price">{correctedPrice}</p>
    );
  };

  useEffect(() => {
    setSaveToggle(saved);
  }, [saved]);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentUser) {
      return dispatch(openModal("login"));
    }

    saveToggle ? dispatch(unSaveListing(id)) : dispatch(saveListing(id));
  };

  const handleClick = () => {
    history.push(`/listings/${id}`);
  };

  return (
    <li className="searchCardList-item" onClick={handleClick}>
      <article className="carditeminlist">
        <div className="listing-item-thumbnail">
          <img src={imageUrl} />
        </div>
        <div className="listing-item-bottom-container">
          <div className="listing-item-bottom">
            <div className="listing-item-top-info">
              <span className="listing-brief-info">
                {property_type} in {neighborhood}
              </span>
              <p className="li-address">{name}</p>
              {priceConvert()}
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
                {beds + " Beds"}
                <BiBed />
              </li>
              <li>
                {baths + " Baths"}
                <BiBath />
              </li>
            </ul>
            <p>Listing by {lister.name}</p>
          </div>
        </div>
      </article>
    </li>
  );
};
export default ListingItemComponent;
