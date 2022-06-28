import React from "react";
import { connect } from "react-redux";

const UserShowComponent = (props) => {
  return (
    <div className="usershow-container">
      <h1></h1>
    </div>
  );
};

// container
const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[ownProps.match.params.userId],
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (formType) => dispatch(openModal(formType)),
  };
};

export default connect(mSTP, mDTP)(UserShowComponent);
