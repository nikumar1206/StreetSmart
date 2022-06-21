import React from "react";

function searchMod(props) {
  return (
    <div className="searchMod">
      <input type="radio" name="rent" id="" />
      <input type="radio" name="buy" id="" />
      <label htmlFor="location">Location</label>
      <input type="text" name="" id="location" placeholder="NYC and NJ +1" />
      <label htmlFor="maxPrice">Max Price</label>
      <input type="text" name="" id="maxPrice" placeholder="No max" />
      hello
    </div>
  );
}

export default searchMod;
