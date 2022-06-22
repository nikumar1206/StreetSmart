import React from "react";
import UserNavContainer from "../headers/user_nav_container";
import MainNavContainer from "../headers/main_nav_container";
import SearchModContainer from "../searchmod/searchmod_container";
import { Link } from "react-router-dom";
import Footer from "./footer";
import DreamHomeComponent from "./dreamhome";
function HomeSplash(props) {
  return (
    <div>
      <div className="header-block">
        <UserNavContainer />
        <MainNavContainer />
      </div>
      <div className="home-page">
        <h1 className="greetings-message">
          The easiest way to rent, buy & now sell in NYC
        </h1>
        <SearchModContainer />
        <p className="greeting-submessage">
          Find the right home faster:{" "}
          <Link
            to="/signup"
            className="greeetings-submessage-links"
            onClick={() => props.openModal("signup")}
          >
            register
          </Link>
          {" or "}
          <Link
            to="/signup"
            className="greeetings-submessage-links"
            onClick={() => props.openModal("signup")}
          >
            login
          </Link>
        </p>
      </div>
      <p className="fairhousing-disclaimer">
        Fair Housing in NYC:{" "}
        <a
          className="fairhousing-disclaimer-link"
          href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf"
        >
          Understand your rights.
        </a>
      </p>
      <DreamHomeComponent />
      <Footer />
    </div>
  );
}

export default HomeSplash;
