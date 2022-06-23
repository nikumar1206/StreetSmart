import React, { useRef, useState } from "react";
import { useEffect } from "react";

function searchMod(props) {
  const [state, setState] = useState({
    rb_toggle: "rent",
    location: ["NYC"],
    maxPrice: "1,000,000",
  });
  // console.log(state);

  const update = (field) => {
    if (field === "rent" || field === "buy") {
      return (e) => setState(() => ({ ...state, rb_toggle: e.target.value }));
    } else {
      return (e) => setState(() => ({ ...state, [field]: e.target.value }));
    }
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
          <button className="searchMod-location-button">Skrt</button>
        </div>
        <div className="searchMod-maxPrice">
          <span className="searchMod-maxprice-label">Max Price</span>
          <input
            type="text"
            className="searchMod-maxprice-input"
            placeholder="No max"
            onChange={update("maxPrice")}
          />
        </div>
        <button className="searchMod-submit-btn" type="submit"></button>
      </form>
    </div>
  );
}

export default searchMod;
