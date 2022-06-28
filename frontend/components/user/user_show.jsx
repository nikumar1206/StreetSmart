import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";

const UserShowComponent = (props) => {
  useEffect(() => {
    props.fetchUser(props.match.params.userId);
  }, []);

  const update = (field) => {
    return (e) => setState({ ...state, [field]: e.target.value });
  };
  return (
    <div className="usershow-container">
      <h1>Personal Information</h1>
      <p>Send requests to listings faster by filling out this information</p>
      <form>
        <label htmlFor="name">Name</label>
        <input
          className="usershow-input"
          id="name"
          onChange={update("name")}
          value={props.currentUser.name}
          type="text"
        />

        <label htmlFor="email">Email</label>
        <input
          className="usershow-input"
          type="text"
          onChange={update("email")}
          value={props.currentUser.email}
          id="email"
        />

        <label htmlFor="phone">Phone</label>
        <input
          className="usershow-input"
          type="text"
          onChange={update("phone")}
          value={props.currentUser.phone}
          id="phone"
        />

        <button className="usershow-btn" type="button">
          Save Changes
        </button>
      </form>
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
