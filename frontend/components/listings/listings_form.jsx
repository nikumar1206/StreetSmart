import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function ListingsForm(props) {
  const params = Object.fromEntries(new URLSearchParams(props.location.search));
  const history = useHistory();
  const { rb_toggle, maxPrice, location } = params;
  let queryString = `?rb_toggle=${rb_toggle}&location=${location}&maxPrice=${maxPrice}`;
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/listings`,
      search: `${queryString}`,
    });
  };
  return (
    <div className="listings-filter-container">
      <form className="listings-filter-form">
        <div className="listingsfilters">
          {/* <span className="searchMod-location-label">Location</span> */}
          <input
            type="text"
            className="listings-filter-location"
            // placeholder="NYC"
            // value={state.location}
            // onChange={update("location")}
          />
          <div className="listingsfilter-buttons">
            <button className="listingsfilterbtn price">Price</button>
            <button className="listingsfilterbtn beds">Beds</button>
            <button className="listingsfilterbtn baths">Baths</button>
            <button className="listingsfilterbtn amenities">Amenities</button>
          </div>
          <button type="submit" className="listingsfilter-submit-btn">
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(ListingsForm);
