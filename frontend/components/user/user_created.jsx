import React, { useEffect } from "react";
import { connect } from "react-redux";
import ResultDetails from "../listings/resultdetails";
import {
  removeListings,
  fetchUserListings,
} from "../../actions/listings_actions";

function UserCreatedComponent({
  removeListings,
  fetchUserListings,
  currentUser,
  listings,
}) {
  useEffect(() => {
    removeListings();
    fetchUserListings(currentUser.id);
  }, []);

  return (
    <div className="usercreated-container">
      <h1 className="usercreated-title">Created Listings</h1>
      <ResultDetails listings={listings} />
    </div>
  );
}

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[ownProps.match.params.userId],
    listings: Object.values(state.entities.listings),
  };
};

const mDTP = (dispatch) => {
  return {
    removeListings: () => dispatch(removeListings()),
    fetchUserListings: (userId) => dispatch(fetchUserListings(userId)),
  };
};

export default connect(mSTP, mDTP)(UserCreatedComponent);
