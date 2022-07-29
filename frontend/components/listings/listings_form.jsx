import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeListings, fetchListings } from "../../actions/listings_actions";
function ListingsForm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState(() => props.params);
  console.log(props);
  const [amenity, setAmenity] = useState(() => JSON.parse(props.params.amen));

  console.log(amenity);
  const update = (field) => {
    return (e) => setState({ ...state, [field]: e.target.value });
  };

  const updateAmenity = (field) => {
    return () => setAmenity({ ...amenity, [field]: !amenity[field] });
  };

  let queryString = `?rb_toggle=${state.rb_toggle}&location=${
    state.location
  }&maxPrice=${state.maxPrice}&minPrice=${state.minPrice}&minBeds=${
    state.minBeds
  }&minBaths=${state.minBaths}&amen=${JSON.stringify(amenity)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeListings());
    dispatch(fetchListings(queryString, amenity)).then(() =>
      history.push({
        pathname: `/listings`,
        search: `${queryString}`,
      })
    );
  };
  const handlebedClick = (e, val) => {
    let beds = Array.from(document.getElementsByClassName("bedbox"));
    beds.map((bed) => {
      bed.classList.remove("active");
    });
    document.getElementsByClassName(`${e} bedbox`)[0].classList.add("active");
    setState({ ...state, minBeds: val });
  };

  const handlebathClick = (e, val) => {
    let baths = Array.from(document.getElementsByClassName("bathbox"));
    baths.map((bath) => {
      bath.classList.remove("active");
    });
    document.getElementsByClassName(`${e} bathbox`)[0].classList.add("active");
    setState({ ...state, minBaths: val });
  };

  const toggleDiv = (filter) => {
    let filterDivs = Array.from(
      document.getElementsByClassName("listingsfilterdiv")
    );
    filterDivs.map((filterDiv) => {
      filterDiv.classList.remove("clicked");
    });
    document
      .getElementsByClassName(`listingsfilterdiv ${filter.toLowerCase()}div`)[0]
      .classList.add("clicked");
  };

  const openHiddenDiv = (e) => {
    e.preventDefault();
    toggleDiv(e.target.innerHTML);
  };
  const closeDiv = (element) => {
    return () =>
      document
        .getElementsByClassName(`listingsfilterdiv ${element}div`)[0]
        .classList.remove("clicked");
  };

  return (
    <div className="listings-filter-container">
      <form onSubmit={handleSubmit} className="listings-filter-form">
        <div className="listingsfilters">
          <div className="listings-filter-locationwrap">
            <span id="nomrg-label" className="searchMod-location-label">
              Location
            </span>

            <input
              type="text"
              className="listings-filter-location"
              placeholder="NYC"
              value={state.location}
              onChange={update("location")}
            />
          </div>
          <div className="listingsfilter-buttons">
            <button onClick={openHiddenDiv} className="listingsfilterbtn price">
              Price
            </button>
            <div className="listingsfilterdiv pricediv">
              <div className="listfilter-priceinputs">
                <div className="input-labelwrapper">
                  <span id="nomrg-label" className="searchMod-location-label">
                    Min
                  </span>
                  <input
                    type="text"
                    placeholder="No minimum"
                    maxLength={8}
                    value={state.minPrice}
                    onChange={update("minPrice")}
                  />
                </div>
                <div className="input-labelwrapper">
                  <span id="nomrg-label" className="searchMod-location-label">
                    Max
                  </span>
                  <input
                    type="text"
                    placeholder="No maximum"
                    maxLength={8}
                    value={state.maxPrice}
                    onChange={update("maxPrice")}
                  />
                </div>
              </div>
              <button
                className="listingsfilter-closedivbtn"
                type="button"
                onClick={closeDiv("price")}
              >
                Done
              </button>
            </div>
            <button onClick={openHiddenDiv} className="listingsfilterbtn beds">
              Beds
            </button>
            <div className="listingsfilterdiv bedsdiv">
              <h1 id="nomrg-label" className="searchMod-location-label">
                Minimum # of Beds
              </h1>
              <div className="bedsdiv-parent-box">
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebedClick("zero", "0")}
                    className="zero bedbox"
                  >
                    <span>0+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebedClick("one", "1")}
                    className="one bedbox"
                  >
                    <span>1+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebedClick("two", "2")}
                    className="two bedbox"
                  >
                    <span>2+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebedClick("three", "3")}
                    className="three bedbox"
                  >
                    <span>3+</span>
                  </div>
                </label>
              </div>
              <button
                type="button"
                className="listingsfilter-closedivbtn"
                onClick={closeDiv("beds")}
              >
                Done
              </button>
            </div>
            <button onClick={openHiddenDiv} className="listingsfilterbtn baths">
              Baths
            </button>
            <div className="listingsfilterdiv bathsdiv">
              <h1 id="nomrg-label" className="searchMod-location-label">
                Minimum # of Baths
              </h1>
              <div className="bedsdiv-parent-box">
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebathClick("zero", "0")}
                    className="zero bathbox"
                  >
                    <span>0+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebathClick("one", "1")}
                    className="one bathbox"
                  >
                    <span>1+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebathClick("two", "2")}
                    className="two bathbox"
                  >
                    <span>2+</span>
                  </div>
                </label>
                <label>
                  <input type="radio" name="radio" />
                  <div
                    onClick={() => handlebathClick("three", "3")}
                    className="three bathbox"
                  >
                    <span>3+</span>
                  </div>
                </label>
              </div>
              <button
                type="button"
                className="listingsfilter-closedivbtn"
                onClick={closeDiv("baths")}
              >
                Done
              </button>
            </div>

            <button
              onClick={openHiddenDiv}
              className="listingsfilterbtn amenities"
            >
              Amenities
            </button>
            <div className="listingsfilterdiv amenitiesdiv">
              <div className="amenities-list">
                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Pets Allowed")}
                    checked={amenity["Pets Allowed"]}
                  />
                  <span>Pets Allowed</span>
                </label>

                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Doorman")}
                    checked={amenity["Doorman"]}
                  />
                  <span>Doorman</span>
                </label>
                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Private Outdoor Space")}
                    checked={amenity["Private Outdoor Space"]}
                  />
                  <span>Private Outdoor Space</span>
                </label>
                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Elevator")}
                    checked={amenity["Elevator"]}
                  />
                  <span>Elevator</span>
                </label>
                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Dishwasher")}
                    checked={amenity["Dishwasher"]}
                  />
                  <span>Dishwasher</span>
                </label>
                <label className="amenity-opt">
                  <input
                    type="checkbox"
                    onChange={updateAmenity("Laundromat")}
                    checked={amenity["Laundromat"]}
                  />
                  <span>Laundromat</span>
                </label>
              </div>
              <button
                type="button"
                className="listingsfilter-closedivbtn"
                onClick={closeDiv("amenities")}
              >
                Done
              </button>
            </div>
          </div>
          <button type="submit" className="listingsfilter-submit-btn">
            <FaSearch id="search-icon-submit-filter" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(ListingsForm);
