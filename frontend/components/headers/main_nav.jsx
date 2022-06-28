import React from "react";
import { Link, withRouter } from "react-router-dom";

function mainNav(props) {
  // handleClick = (e) => {
  //   e.preventDefault();

  // };
  return (
    <div className="main-nav-container">
      <div className="main-nav">
        <div className="main-nav-items">
          <ul className="main-nav-list">
            <li className="mvn-li">
              <Link
                to="/listings?rb_toggle=rent&location=NYC&maxPrice=99999999"
                className="mvn-alinks"
                onClick={() => {
                  props.history.push(
                    "/listings?rb_toggle=rent&location=NYC&maxPrice=99999999"
                  );
                }}
              >
                Rent
              </Link>
            </li>
            <li className="mvn-li">
              <Link
                to="/listings?rb_toggle=buy&location=NYC&maxPrice=99999999"
                className="mvn-alinks"
                onClick={() => {
                  props.history.push(
                    "/listings?rb_toggle=buy&location=NYC&maxPrice=99999999"
                  );
                }}
              >
                Buy
              </Link>
            </li>
            <li className="mvn-li">
              <a href="" className="mvn-alinks">
                Sell
              </a>
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

export default withRouter(mainNav);
