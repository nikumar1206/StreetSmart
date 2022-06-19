import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <div className="greetings-main">
      <div className="header">
        <div className="logo">
          <a href="../../app/images/logo.png"></a>
        </div>
        <div className="nav">
          <Link to="/signup">Sign up!</Link>
        </div>
      </div>
      <p className="greetings-message">
        The easiest way to rent, buy & now sell in NYC
      </p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up!</Link>
    </div>
  );
  const loggedIn = () => (
    <div>
      <p>Hi, {currentUser.email}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
  return currentUser ? loggedIn() : notLoggedIn();
};

export default Greeting;
