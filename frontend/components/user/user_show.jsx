import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import { updateUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";

const UserShowComponent = (props) => {
  const [state, setState] = useState(props.currentUser);

  useEffect(() => {
    props.fetchUser(props.match.params.userId);
  }, []);

  console.log(state);

  const update = (field) => {
    return (e) => setState({ ...state, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateUser(state).then(() => openModal("popup"));
  };

  return (
    <div className="usershow-container">
      <section className="usershow-info-container">
        <h1 className="usershow-title">Personal Information</h1>
        <p className="usershow-descript">
          Send requests to listings faster by filling out this information
        </p>
        <form onSubmit={handleSubmit}>
          <label className="usershow-label" htmlFor="name">
            Name
          </label>
          <input
            className="usershow-input"
            id="name"
            onChange={update("name")}
            value={state.name}
            type="text"
          />

          <label className="usershow-label" htmlFor="email">
            Email
          </label>
          <input
            className="usershow-input"
            type="email"
            onChange={update("email")}
            value={state.email}
            id="email"
            required
          />

          <label className="usershow-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="usershow-input"
            type="text"
            onChange={update("phone")}
            value={state.phone}
            id="phone"
          />

          <button className="usershow-btn" type="submit">
            Save Changes
          </button>
        </form>
      </section>
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
    updateUser: (user) => dispatch(updateUser(user)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mSTP, mDTP)(UserShowComponent);
