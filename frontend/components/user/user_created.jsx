import React, { useEffect } from "react";
import ResultDetails from "../listings/resultdetails";
import {
  removeListings,
  fetchUserListings,
} from "../../actions/listings_actions";
import { fetchSavedListings } from "../../actions/save_listings_actions";
import { useCurrentUser, useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
function UserCreatedComponent(props) {
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const listings = useListings();
  useEffect(() => {
    dispatch(removeListings());
    if (props.match.path === "/users/:userId/created") {
      dispatch(fetchUserListings(currentUser.id));
    } else {
      dispatch(fetchSavedListings(currentUser.id));
    }
  }, []);

  return (
    <div className="usercreated-container">
      <h1 className="usershow-title savedlistings">Created Listings</h1>
      <div className="usersave-main">
        <section className="saved-listings-container">
          <ResultDetails listings={listings} />
        </section>
      </div>
    </div>
  );
}

export default withRouter(UserCreatedComponent);
