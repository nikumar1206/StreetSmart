import React from "react";

function searchMod(props) {
  return (
    <div className="searchMod">
      <form onSubmit={() => console.log("submit is clicked")}>
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
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" name="" id="maxPrice" placeholder="No max" />
        </div>
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default searchMod;
