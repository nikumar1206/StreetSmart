import React, { useEffect } from "react";
import { fetchSavedListings } from "../../actions/save_listings_actions";
import ResultDetails from "../listings/resultdetails";
import {
  removeListings,
  fetchUserListings,
} from "../../actions/listings_actions";
import { useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { useCurrentUser } from "../../util/selectors";
import { withRouter } from "react-router-dom";

function UserShowSavedComponent(props) {
  const listings = useListings();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  let title = "";
  props.match.path === "/users/:userId/created"
    ? (title = "Created Listing")
    : (title = "Saved Listing");

  useEffect(() => {
    dispatch(removeListings());
    if (props.match.path === "/users/:userId/created") {
      title = "Saved Listings";
      dispatch(fetchUserListings(currentUser.id));
    } else {
      title = "Created Listings";
      dispatch(fetchSavedListings(currentUser.id));
    }
  }, [props.match.path]);

  return (
    <div className="usersave-container">
      <h1 className="usershow-title savedlistings">{title}</h1>
      <div className="usersave-main">
        <section className="saved-listings-container">
          <ResultDetails listings={listings} />
        </section>
      </div>
    </div>
  );
}

export default withRouter(UserShowSavedComponent);
