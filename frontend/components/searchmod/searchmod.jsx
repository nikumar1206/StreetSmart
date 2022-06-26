import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function searchMod(props) {
  const [state, setState] = useState({
    rb_toggle: "rent",
    location: "NYC",
    maxPrice: "99999999",
  });
  console.log(state);

  const update = (field) => {
    if (field === "rent" || field === "buy") {
      return (e) => setState(() => ({ ...state, rb_toggle: e.target.value }));
    } else {
      return (e) => setState(() => ({ ...state, [field]: e.target.value }));
    }
  };
  const queryString = `&rb_toggle=${state.rb_toggle}&location=${state.location}&maxPrice=${state.maxPrice}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchListings(queryString);
    props.history.push({
      pathname: `/listings/search/${queryString}`,
    });
  };

  return (
    <div className="searchMod">
      <form className="searchMod-form">
        <div className="searchMod-toggle">
          <button
            role="radio"
            className="sm-toggle-rent-btn"
            onClick={update("rent")}
            value="rent"
          >
            Rent
          </button>
          <button
            role="radio"
            className="sm-toggle-buy-btn checked"
            onClick={update("buy")}
            value="buy"
          >
            Buy
          </button>
        </div>
        <div className="searchMod-location">
          <span className="searchMod-location-label">Location</span>
          <input
            type="text"
            className="searchMod-location-input"
            placeholder="NYC"
            onChange={update("location")}
          />
        </div>
        <div className="searchMod-maxPrice">
          <span className="searchMod-maxprice-label">Max Price ($)</span>
          <input
            type="number"
            className="searchMod-maxprice-input"
            placeholder="No max"
            onChange={update("maxPrice")}
            maxLength={9}
          />
        </div>

        <button className="searchMod-submit-btn" onClick={handleSubmit}>
          <img
            className="searchMod-submit-img"
            src="https://streetsmart-safeassets.s3.amazonaws.com/images/Screen+Shot+2022-06-26+at+11.58.48+AM.png"
          />
        </button>
      </form>
    </div>
  );
}

export default withRouter(searchMod);
