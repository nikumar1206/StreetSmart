import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const UserNav = ({ currentUser, logout, openModal }) => {
  const history = useHistory();
  const notLoggedIn = () => (
    <div className="user-nav-container">
      <div className="user-nav">
        <div className="header">
          <div className="logo" onClick={() => history.push("/")}>
            <img
              className="logo-img"
              src="https://streetsmart-safeassets.s3.amazonaws.com/images/logo.png"
            />
          </div>
          <ul>
            <li>
              <button
                className="user-nav-account-links"
                onClick={() => openModal("signup")}
              >
                Register
              </button>
            </li>
            <li>
              <button
                className="user-nav-account-links"
                onClick={() => openModal("login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
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
            <div className="account-dropdown">
              <button className="account-btn">
                Account
                <div className="account-dropdown-content">
                  <Link to={`/users/${currentUser.id}`}>Profile</Link>
                  <Link to={`/users/${currentUser.id}/saved`}>
                    Saved Listings
                  </Link>
                  <Link to={`/users/${currentUser.id}/created`}>
                    My Listings
                  </Link>
                </div>
              </button>
            </div>
          </li>

          <li className="user-nav-account-links">
            <a className="user-nav-account-links" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return currentUser ? loggedIn() : notLoggedIn();
};
export default UserNav;
