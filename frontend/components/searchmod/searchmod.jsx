import React from "react";

function searchMod(props) {
  return (
    <div className="searchMod">
      <form
        className="searchMod-form"
        // onSubmit={() => console.log("submit is clicked")}
      >
        <div className="searchMod-toggle">
          <button role="radio" className="sm-toggle-rent-btn">
            Rent
          </button>
          <button role="radio" className="sm-toggle-rent-btn">
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
          />
        </div>
        <button className="searchMod-submit-btn" type="submit"></button>
      </form>
    </div>
  );
}

export default searchMod;
