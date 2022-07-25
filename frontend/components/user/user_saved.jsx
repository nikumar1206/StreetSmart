import React, { useEffect } from "react";
import { fetchSavedListings } from "../../actions/save_listings_actions";
import { connect } from "react-redux";
import ResultDetails from "../listings/resultdetails";
import { removeListings } from "../../actions/listings_actions";
import { useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { useCurrentUser } from "../../util/selectors";

function UserShowSavedComponent() {
  const listings = useListings();
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeListings());
    dispatch(fetchSavedListings(currentUser.id));
  }, []);

  if (listings) {
    return (
      <div className="usersave-container">
        <h1 className="usershow-title savedlistings">Saved Listings</h1>
        <div className="usersave-main">
          <section className="usersave-listings-container">
            <ResultDetails listings={listings} />
          </section>
          <section className="usersave-maps-container"></section>
        </div>
      </div>
    );
  }
}

export default UserShowSavedComponent;
