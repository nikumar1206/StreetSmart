import React, { useState } from "react";
import { Link } from "react-router-dom";

function ListingItemComponent(props) {
  const [toggle, setToggled] = useState({});
  const priceConvert = () => {
    let price = props.listing.price;
    return price.toLocaleString();
  };

  const handleSave = () => {
    if (props.listing.saved) {
      console.log(scoop);
    } else {
      console.log(gloop);
    }
    setToggled(!toggle);
  };

  return (
    <li className="searchCardList-item">
      <Link className="listing-link" to={`/listings/${props.listing.id}`}>
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
            <button className="heartsave-btn">
              <img src="" alt="" />
            </button>
          </div>
        </div>

        <div className="li-lowerblock">
          <ul className="li-lowerblock-info">
            <li className="first-child-li">{props.listing.beds} Beds</li>
            <li>{props.listing.baths} Baths</li>
          </ul>
          <p>Listing by {props.listing.lister.name}</p>
        </div>
      </Link>
    </li>
  );
}

export default ListingItemComponent;
