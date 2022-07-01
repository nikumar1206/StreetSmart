import React from "react";
import { Link } from "react-router-dom";

function ListerDescriptionContainer(props) {
  console.log(props.listing);
  const priceConvert = () => {
    let price = props.listing.price;
    return price.toLocaleString();
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
        <Link to="/">
          <button className="save-button">Save</button>
        </Link>
        <button className="share-button">Share</button>
      </section>
      <p>
        This listing has been saved by {Math.floor(Math.random() * 500)} people.
      </p>
      <div className="notes-container">
        <Link to="/">
          <button className="notes-button">+ Add notes to this listing</button>
        </Link>
      </div>

      <div className="contact-lister-buttons">
        {props.listing.rent_bool ? (
          <Link to="/">
            <button className="tour-button">Request a tour</button>
          </Link>
        ) : (
          <Link to="/">
            <button className="schedule-button">Schedule a Showing</button>
          </Link>
        )}
      </div>
      <section className="lister-info">
        <img src="https://www.google.com/favicon.ico" alt="google ico" />
        <h1 className="lister-info-title">{props.listing.lister.name}</h1>
      </section>
    </div>
  );
}

export default ListerDescriptionContainer;
