import React from "react";
import NavUserContainer from "./headers/nav_user_container";
import MainNavContainer from "./headers/main_nav_container";
import SearchModContainer from "./searchmod/searchmod_container";
const homeSplash = () => {
  return (
    <div>
      <div className="header-block">
        <NavUserContainer />
        <MainNavContainer />
      </div>
      <div className="home-page">
        <h1 className="greetings-message">
          The easiest way to rent, buy & now sell in NYC
        </h1>
        <SearchModContainer />
        <div className="footer">this will be the footer</div>
      </div>
    </div>
  );
};

export default homeSplash;
