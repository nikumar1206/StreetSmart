import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  const query = (toggle) =>
    `/listings/?rb_toggle=${toggle}&location=NYC&maxPrice=99999999`;
  return (
    <div className="main-nav-container">
      <div className="main-nav">
        <div className="main-nav-items">
          <ul className="main-nav-list">
            <li className="mvn-li">
              <Link to={`${query("rent")}`} className="mvn-alinks">
                Rent
              </Link>
            </li>
            <li className="mvn-li">
              <Link to={`${query("buy")}`} className="mvn-alinks">
                Buy
              </Link>
            </li>
            <li className="mvn-li">
              <Link to="/listings/create" className="mvn-alinks">
                Sell
              </Link>
            </li>
            <li className="mvn-li">
              <a
                href="https://www.linkedin.com/in/nikhil-kumar7890/"
                className="mvn-alinks"
              >
                LinkedIn
              </a>
            </li>
            <li className="mvn-li">
              <a
                href="https://github.com/nikumar1206/StreetSmart"
                className="mvn-alinks"
              >
                Github
              </a>
            </li>
            <li className="mvn-li">
              <a href="http://nikhil-kumar.tk/" className="mvn-alinks">
                Personal Website
              </a>
            </li>
          </ul>
        </div>
        <div className="main-nav-search">
          <form
          // onSubmit={() =>
          //   console.log("search button pressed, doesnt work tho")
          // }
          >
            {/* <input
              className="main-nav-search-input"
              type="text"
              name=""
              id=""
              placeholder="e.g. address, building, agent"
              disabled
            />
            <button
              type="button"
              // onClick={() => console.log("search button pressed")}
              className="main-nav-search-button"
              disabled
            >
              <img
                className="main-nav-search-img"
                src="https://streetsmart-safeassets.s3.amazonaws.com/images/Screen+Shot+2022-06-21+at+11.52.39+AM.png"
                disabled
              />
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
