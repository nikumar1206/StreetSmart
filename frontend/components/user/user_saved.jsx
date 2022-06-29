import React, { useEffect } from "react";
import { fetchSavedListings } from "../../actions/save_listings_actions";
import { connect } from "react-redux";

function UserShowSavedComponent(props) {
  console.log(props);

  useEffect(() => {
    props.fetchSavedListings(props.currentUser.id);
  }, []);

  return (
    <div className="usersave-container">
      <h1 className="usershow-title">Saved Listings</h1>
      <div className="usersave-main"></div>
    </div>
  );
}

// container
const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[ownProps.match.params.userId],
    listings: Object.values(state.entities.listings),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user)),
    openModal: (modal) => dispatch(openModal(modal)),
    fetchSavedListings: (userId) => dispatch(fetchSavedListings(userId)),
  };
};

export default connect(mSTP, mDTP)(UserShowSavedComponent);
