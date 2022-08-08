import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
function searchMod(props) {
  const [state, setState] = useState({
    rb_toggle: "rent",
    location: "NYC",
    minPrice: "0",
    maxPrice: "99999999",
    minBeds: "0",
    minBaths: "0",
    amenities: {
      "Pets Allowed": false,
      Doorman: false,
      "Private Outdoor Space": false,
      Elevator: false,
      Dishwasher: false,
      Laundromat: false,
    },
  });
  const [toggled, setToggled] = useState(true);
  const handleToggle = (field) => {
    if (field === "rent") {
      return (e) => {
        setToggled(true);
        setState(() => ({ ...state, rb_toggle: e.target.value }));
      };
    } else if (field === "buy") {
      return (e) => {
        setToggled(false);
        setState(() => ({ ...state, rb_toggle: e.target.value }));
      };
    }
  };

  const update = (field) => {
    return (e) => setState(() => ({ ...state, [field]: e.target.value }));
  };

  const queryString = `?rb_toggle=${state.rb_toggle}&location=${
    state.location
  }&maxPrice=${state.maxPrice}&minPrice=${state.minPrice}&minBeds=${
    state.minBeds
  }&minBaths=${state.minBaths}&amen=${JSON.stringify(state.amenities)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: `/listings`,
      search: `${queryString}`,
    });
  };

  return (
    <div className="searchMod">
      <form className="searchMod-form" onSubmit={() => handleSubmit}>
        <div className="searchMod-toggle">
          <button
            type="button"
            role="radio"
            id="rent-btn"
            className={
              toggled ? "sm-toggle-btn rent clicked" : "sm-toggle-btn rent"
            }
            onClick={handleToggle("rent")}
            value="rent"
            checked={state.rb_toggle === "rent"}
            autoFocus
          >
            Rent
          </button>
          <button
            type="button"
            role="radio"
            id="buy-btn"
            className={
              !toggled ? "sm-toggle-btn buy clicked" : "sm-toggle-btn buy"
            }
            onClick={handleToggle("buy")}
            value="buy"
            checked={state.rb_toggle === "buy"}
          >
            Buy
          </button>
        </div>
        <div className="searchMod-location">
          <span className="searchMod-location-label">Location</span>
          <input
            type="text"
            className="searchMod-location-input fa-location"
            // placeholder="NYC"
            value={state.location}
            onChange={update("location")}
          />
        </div>
        <div className="searchMod-maxPrice">
          <span className="searchMod-maxprice-label">Max Price ($)</span>
          <input
            type="text"
            className="searchMod-maxprice-input"
            placeholder="No max"
            onChange={update("maxPrice")}
            maxLength={9}
          />
        </div>

        <button
          type="submit"
          className="searchMod-submit-btn"
          onClick={handleSubmit}
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default withRouter(searchMod);
