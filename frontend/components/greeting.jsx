import React from "react";
import NavUserContainer from "./nav_user_container";

const Greeting = () => {
  return (
    <div>
      <NavUserContainer />
      <h1 className="greetings-message">
        The easiest way to rent, buy & now sell in NYC
      </h1>
    </div>
  );
};

export default Greeting;
