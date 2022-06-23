import React from "react";
function mainNav(props) {
  return (
    <div className="main-nav-container">
      <div className="main-nav">
        <div className="main-nav-items">
          <ul className="main-nav-list">
            <li className="mvn-li">
              <a href="" className="mvn-alinks">
                Rent
              </a>
            </li>
            <li className="mvn-li">
              <a href="" className="mvn-alinks">
                Buy
              </a>
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
        <div className="main-nav-search">
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
            />
            <button type="submit" className="main-nav-search-button">
              <img
                className="main-nav-search-img"
                src="https://streetsmart-safeassets.s3.amazonaws.com/images/Screen+Shot+2022-06-21+at+11.52.39+AM.png"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default mainNav;
