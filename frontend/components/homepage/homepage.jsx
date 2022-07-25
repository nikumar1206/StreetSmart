import React from "react";
import SearchModContainer from "../searchmod/searchmod_container";
import { Link } from "react-router-dom";
import { useOpenModal } from "../../util/dispatches";
import { useCurrentUser } from "../../util/selectors";

const HomeSplash = () => {
  const currentUser = useCurrentUser();
  const openModal = useOpenModal();
  return (
    <div>
      <div className="home-page">
        <h1 className="greetings-message">
          The easiest way to rent, buy & now sell in NYC
        </h1>
        <SearchModContainer />
        {currentUser ? (
          <Link
            to={`/users/${currentUser.id}`}
            className="greetings-submessage-links-logged"
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
};

export default HomeSplash;
