import React from "react";
import { Link, withRouter } from "react-router-dom";

function MainNav(props) {
  const rent_query = "/listings/?rb_toggle=rent&location=NYC&maxPrice=99999999";
  const buy_query = "/listings/?rb_toggle=buy&location=NYC&maxPrice=99999999";
  console.log(props);
  return (
    <div className="main-nav-container">
      <div className="main-nav">
        <div className="main-nav-items">
          <ul className="main-nav-list">
            <li className="mvn-li">
              <Link
                to={`${rent_query}`}
                className="mvn-alinks"
                onClick={() => {
                  props.removeListings();
                  props.fetchListings(
                    "?rb_toggle=rent&location=NYC&maxPrice=99999999"
                  );
                  props.history.push(`${rent_query}`);
                }}
              >
                Rent
              </Link>
            </li>
            <li className="mvn-li">
              <Link
                to={`${buy_query}`}
                className="mvn-alinks"
                onClick={() => {
                  props.removeListings();
                  props.fetchListings(
                    "?rb_toggle=buy&location=NYC&maxPrice=99999999"
                  );
                  props.history.push(`${buy_query}`);
                }}
              >
                Buy
              </Link>
            </li>
            <li className="mvn-li">
              <Link to="/users/:userId" className="mvn-alinks">
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
                href="https://www.github.com/nikumar1206"
                className="mvn-alinks"
              >
                Github
              </a>
            </li>
            <li className="mvn-li">
              <a
                href="https://nikumar1206.github.io/personal-website/"
                className="mvn-alinks"
              >
                Personal Website
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="main-nav-search">
          <form
          // onSubmit={() =>
          //   console.log("search button pressed, doesnt work tho")
          // }
          >
            <input
              className="main-nav-search-input"
              type="text"
              name=""
              id=""
              placeholder="e.g. address, building, agent"
              disabled
            />
            <button
              type="button"
              onClick={() => console.log("search button pressed")}
              className="main-nav-search-button"
              disabled
            >
              <img
                className="main-nav-search-img"
                src="https://streetsmart-safeassets.s3.amazonaws.com/images/Screen+Shot+2022-06-21+at+11.52.39+AM.png"
                disabled
              />
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default withRouter(MainNav);
