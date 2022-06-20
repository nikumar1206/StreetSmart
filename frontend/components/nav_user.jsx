import React from "react";
import { Link } from "react-router-dom";

const navUser = ({ currentUser, logout }) => {
  const notLoggedIn = () => (
    <div className="user-nav">
      <div className="header">
        <div className="logo">
          <a href="../../app/images/logo.png"></a>
        </div>
        <ul>
          <li>
            <Link to="/signup">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const loggedIn = () => (
    <div className="user-nav">
      <div className="header">
        <div className="logo">
          <a href="../../app/images/logo.png"></a>
        </div>
        <ul className="ul-user-nav">
          <li>
            <Link to="/">My Activity</Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};
export default navUser;
