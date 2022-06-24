import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function searchMod(props) {
  const [state, setState] = useState({
    rb_toggle: "rent",
    location: "NYC",
    maxPrice: "1,000,000",
  });
  // console.log(state);
  // console.log(props);
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
          <select
            defaultValue={"NYC"}
            // value={state.location}
            className="searchMod-location-select"
            onChange={update("location")}
          >
            <option value="NYC">NYC</option>
            <option value="Queens">Queens</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Staten Island">Staten Island</option>
            <option value="Bronx">Bronx</option>
          </select>
        </div>
        <div className="searchMod-maxPrice">
          <span className="searchMod-maxprice-label">Max Price ($)</span>
          <input
            type="number"
            className="searchMod-maxprice-input"
            placeholder="No max"
            onChange={update("maxPrice")}
          />
        </div>
        <button
          className="searchMod-submit-btn"
          onClick={handleSubmit}
        ></button>
      </form>
    </div>
  );
}

export default withRouter(searchMod);
