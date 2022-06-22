import React from "react";
import { Link } from "react-router-dom";

const UserNav = ({ currentUser, logout, openModal }) => {
  const notLoggedIn = () => (
    <div className="user-nav">
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              className="logo-img"
              src="https://streetsmart-safeassets.s3.amazonaws.com/images/logo.png"
            />
          </a>
        </div>
        <ul>
          <li>
            <Link
              to="/"
              className="user-nav-account-links"
              onClick={() => openModal("signup")}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="user-nav-account-links"
              onClick={() => openModal("login")}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const loggedIn = () => (
    <div className="user-nav">
      <div className="header">
        <div className="logo">
          <a href="/">
            <img
              className="logo-img"
              src="https://streetsmart-safeassets.s3.amazonaws.com/images/logo.png"
            />
          </a>
        </div>
        <ul className="ul-user-nav">
          <li className="user-nav-account-links">
            <Link to="/" className="user-nav-account-links">
              My Activity
            </Link>
          </li>
          <li className="user-nav-account-links">
            <Link to="/" className="user-nav-account-links" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};
export default UserNav;
