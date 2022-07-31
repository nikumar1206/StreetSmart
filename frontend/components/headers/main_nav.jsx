import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function MainNav(props) {
  const history = useHistory();
  const amenities = {
    "Pets Allowed": false,
    Doorman: false,
    "Private Outdoor Space": false,
    Elevator: false,
    Dishwasher: false,
    Laundromat: false,
  };

  const query = (toggle) =>
    `/listings/?rb_toggle=${toggle}&location=NYC&maxPrice=99999999&minPrice=0&minBeds=0&minBaths=0&amen=${JSON.stringify(
      amenities
    )}`;
  console.log(props);
  const handleSellbtn = () => {
    if (!props.currentUser) {
      props.openModal("login");
    } else {
      history.push("/listings/create");
    }
  };
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
              <a
                id="sneakyatag"
                onClick={() => handleSellbtn()}
                className="mvn-alinks"
              >
                Sell
              </a>
            </li>
            <li className="mvn-li">
              <a
                href="https://www.linkedin.com/in/nikhil-kumar7890/"
                target={"_blank"}
                className="mvn-alinks"
              >
                LinkedIn
              </a>
            </li>
            <li className="mvn-li">
              <a
                href="https://github.com/nikumar1206/StreetSmart"
                target={"_blank"}
                className="mvn-alinks"
              >
                Github
              </a>
            </li>
            <li className="mvn-li">
              <a
                href="http://nikhil-kumar.tk/"
                className="mvn-alinks"
                target={"_blank"}
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
              // onClick={() => console.log("search button pressed")}
              className="main-nav-search-button"
              disabled
            >
              <FaSearch className="search-icon navbar" />
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default MainNav;
