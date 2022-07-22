import React, { useEffect } from "react";
import { fetchSavedListings } from "../../actions/save_listings_actions";
import { connect } from "react-redux";
import ResultDetails from "../listings/resultdetails";
import { removeListings } from "../../actions/listings_actions";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";

function UserShowSavedComponent(props) {
  const listings = useSelector(
    (state) => Object.values(state.entities.listings),
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );
  useEffect(() => {
    props.removeListings();
    props.fetchSavedListings(props.currentUser.id);
  }, []);

  const reallySaved = () => {
    let saved = [];
    const listings = Object.values(savedListings);
    listings.forEach((listing) => {
      if (listing.saved) {
        saved.push(listing);
      }
    });
    return saved;
  };

  // console.log(savedListings);
  if (listings) {
    return (
      <div className="usersave-container">
        <h1 className="usershow-title savedlistings">Saved Listings</h1>
        <div className="usersave-main">
          <section className="usersave-listings-container">
            {/* {console.log(reallySaved())} */}
            <ResultDetails listings={listings} />
          </section>
          <section className="usersave-maps-container"></section>
        </div>
      </div>
    );
  }
}

// container
const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[ownProps.match.params.userId],
    // listings: Object.values(state.entities.listings),
  };
};

const mDTP = (dispatch) => {
  return {
    removeListings: () => dispatch(removeListings()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchSavedListings: (userId) => dispatch(fetchSavedListings(userId)),
  };
};

export default connect(mSTP, mDTP)(UserShowSavedComponent);
