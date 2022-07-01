import React from "react";
import SearchModContainer from "../searchmod/searchmod_container";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/sessions_actions";
import { Link } from "react-router-dom";

function HomeSplash({ openModal, currentUser }) {
  return (
    <div>
      <div className="home-page">
        <h1 className="greetings-message">
          The easiest way to rent, buy & now sell in NYC
        </h1>
        <SearchModContainer />
        {currentUser ? (
          <Link
            className="greetings-submessage-links-logged"
            to={`/users/${currentUser.id}`}
          >
            Update profile
          </Link>
        ) : (
          <p className="greeting-submessage">
            Find the right home faster:{" "}
            <Link
              to="/"
              className="greetings-submessage-links"
              onClick={() => openModal("signup")}
            >
              register
            </Link>
            {" or "}
            <Link
              to="/"
              className="greetings-submessage-links"
              onClick={() => openModal("login")}
            >
              login
            </Link>
          </p>
        )}
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
    </div>
  );
}

// container

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(HomeSplash);
