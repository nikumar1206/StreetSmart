import React from "react";
import { Link } from "react-router-dom";

function ListerDescriptionContainer(props) {
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
          <button>Save</button>
        </Link>
        <button>Share</button>
      </section>
      <p>This listing has been saved by {props.listing.saves} people.</p>
      <div className="notes-container">
        <Link to="/">
          <button>+ Add notes to this listing</button>
        </Link>
      </div>

      <div className="contact-lister-buttons">
        {props.listing.rent_bool ? (
          <Link to="/">
            <button>Request a tour</button>
          </Link>
        ) : (
          <Link to="/">
            <button>Schedule a Showing</button>
          </Link>
        )}
      </div>
      <section className="notes-button-container">
        <Link to="/">
          <button>Add notes to this listing</button>
        </Link>
      </section>
      <section className="lister-info">
        <p>Listed by</p>
        <p>Lister Info here/maybe image as well</p>
      </section>
    </div>
  );
}

export default ListerDescriptionContainer;
