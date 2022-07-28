import React, { useEffect } from "react";
import { useState } from "react";
import { fetchUser } from "../../actions/user_actions";
import { updateUser } from "../../actions/user_actions";
import { useCurrentUser } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const UserShowComponent = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useCurrentUser();
  const [state, setState] = useState(currentUser);

  useEffect(() => {
    dispatch(fetchUser(props.match.params.userId));
  }, []);

  const update = (field) => {
    return (e) => setState({ ...state, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(state));
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
            minLength={5}
          />

          <label className="usershow-label" htmlFor="email">
            Email
          </label>
          <input
            className="usershow-input email"
            type="email"
            onChange={update("email")}
            value={state.email}
            id="email"
            title="Cannot be changed for security reasons"
            disabled
          />

          <label className="usershow-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="usershow-input"
            type="tel"
            onChange={update("phone")}
            value={state.phone}
            id="phone"
            minLength={5}
            maxLength={12}
          />
          <button className="usershow-btn" type="submit">
            Save Changes
          </button>
        </form>

        <section className="profile-links">
          <button
            onClick={() => history.push(`/users/${currentUser.id}/saved`)}
            className="profile-link-btn"
          >
            Saved Listings
          </button>
          <button
            onClick={() => history.push(`/listings/create`)}
            className="profile-link-btn"
          >
            Create Listing
          </button>
          <button
            onClick={() => history.push(`/users/${currentUser.id}/created`)}
            className="profile-link-btn"
          >
            Created Listings
          </button>
        </section>
      </section>
    </div>
  );
};
export default UserShowComponent;
