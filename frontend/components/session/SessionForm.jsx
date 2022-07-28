import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearErrors } from "../../actions/sessions_actions";
import { useModal } from "../../util/selectors";
function SessionForm(props) {
  const dispatch = useDispatch();
  const modal = useModal();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const update = (field) => {
    setValues((values) => ({ ...values, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    const user = { ...values };
    props.processForm(user).then(() => {
      props.closeModal();
    });
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault;
    const demoUser = { email: "demo_user@demo.com", password: "password" };
    setValues(demoUser);
    props.login(demoUser).then(() => props.closeModal());
  };

  const closeModal = (e) => {
    e.preventDefault();
    props.closeModal();
    dispatch(clearErrors());
  };

  return (
    <div className="session-form-container">
      <span className="modal-close" onClick={closeModal}>
        &times;
      </span>
      <div className="signing-message">
        <h1>{props.formType}</h1>
        <p>Take full advantage of StreetSmart's features</p>
      </div>
      <div className="error-message-container">
        {props.errors.map((error, idx) => (
          <p className="error-message" key={idx}>
            {error}
          </p>
        ))}
      </div>
      <form className="form-box" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <div>email</div>
        </label>
        <input
          className="session-form-inputs"
          id="email"
          type="email"
          value={values.email}
          onChange={() => update("email")}
          autoFocus
          required
        />
        <label htmlFor="password">
          <div>Password</div>
        </label>
        <input
          className="session-form-inputs"
          id="password"
          type="password"
          value={values.password}
          onChange={() => update("password")}
          required
        />
        <button type="submit" className="form-submit-button">
          Submit
        </button>
      </form>

      <div className="session-form-divider">
        <p className="sf-divider-text">or</p>
      </div>

      <button
        type="submit"
        className="demo-user-button"
        onClick={handleDemoSubmit}
      >
        Continue as Demo User
      </button>

      <div className="disclaimer-text-container">
        <p>This clone is for educational purposes only.</p>
        <p>Please do not put any sensitive information.</p>
      </div>
    </div>
  );
}

export default SessionForm;
