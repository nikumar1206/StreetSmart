import React from "react";
import MainNavContainer from "./main_nav_container";
import UserNavContainer from "./user_nav_container";
function Navs() {
  return (
    <div className="navs-container">
      <UserNavContainer />
      <MainNavContainer />
    </div>
  );
}

export default Navs;
