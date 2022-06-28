import React from "react";
import { Link } from "react-router-dom";

function ListingItemComponent(props) {
  // console.log(props);
  // const heartIcon = () => {
  //   return props.listing.rent_bool ? "♡" : "♡";
  // };
  const priceConvert = () => {
    let price = props.listing.price;
    return price.toLocaleString();
  };
  return (
    <Link className="listing-link" to={`/listings/${props.listing.id}`}>
      <li className="searchCardList-item">
        <div className="listing-item-thumbnail">
          <img src={props.listing.imageUrl} />
        </div>
        <div className="listing-item-bottom">
          <span className="listing-brief-info">
            {props.listing.property_type} in {props.listing.neighborhood}
          </span>
          <p className="li-address">{props.listing.name}</p>
          <p className="li-price">${priceConvert()}</p>
          <div className="li-lowerblock">
            <ul className="li-lowerblock-info">
              <li className="first-child-li">{props.listing.beds} Beds</li>
              <li>{props.listing.baths} Baths</li>
            </ul>
            <p>Listing by {props.listing.email}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ListingItemComponent;
