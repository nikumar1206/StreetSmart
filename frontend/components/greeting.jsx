import React from "react";
import NavUserContainer from "./headers/nav_user_container";
import { MainNavContainer } from "./headers/main_nav_container";

const homeSplash = () => {
  return (
    <div>
      <NavUserContainer />
      <MainNavContainer />
      <h1 className="greetings-message">
        The easiest way to rent, buy & now sell in NYC
      </h1>
    </div>
  );
};

export default homeSplash;
