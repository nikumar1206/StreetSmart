import React, { useEffect, useState } from "react";
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
import Spinner from "../spinner/spinner_component";
function UserShowSavedComponent(props) {
  const [isLoaded, setLoaded] = useState(() => false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const listings = useListings();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  let title = "";
  props.match.path === "/users/:userId/created"
    ? (title = "Created Listings")
    : (title = "Saved Listings");

  useEffect(() => {
    setLoaded(false);
    dispatch(removeListings());
    if (props.match.path === "/users/:userId/created") {
      dispatch(fetchUserListings(currentUser.id)).then(() => setLoaded(true));
    } else {
      dispatch(fetchSavedListings(currentUser.id)).then(() => setLoaded(true));
    }
  }, [props.match.path]);

  if (isLoaded) {
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
  } else {
    return <Spinner />;
  }
}

export default withRouter(UserShowSavedComponent);
