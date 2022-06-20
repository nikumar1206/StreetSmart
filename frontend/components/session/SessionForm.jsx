import React, { useState } from "react";

function SessionForm(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const update = (field) => {
    setValues((values) => ({ ...values, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...values };
    props.processForm(user);
    // props.closeModal();
  };

  const closeModal = (e) => {
    e.preventDefault();
    props.closeModal();
  };

  return (
    <div className="session-form-container">
      <span className="modal-close" onClick={closeModal}>
        &times;
      </span>
      <h1>Welcome to StreetEasy</h1>
      {console.log(props)}
      <div className="error-message-container">
        {props.errors.map((error, idx) => (
          <p className="error-message" key={idx}>
            {error}
          </p>
        ))}
      </div>
      <form className="form-box">
        <label htmlFor="email">
          <div>email</div>
        </label>
        <input
          id="email"
          type="text"
          value={values.email}
          placeholder="email"
          onChange={() => update("email")}
        />
        <label htmlFor="password">
          <div>Password</div>
        </label>
        <input
          id="password"
          type="password"
          value={values.password}
          placeholder="Password"
          onChange={() => update("password")}
        />
      </form>
      <button className="form-submit-button" onClick={handleSubmit}>
        {props.formType}
      </button>
      <span>OR</span>
      <button className="demo-user-button">Continue as Demo User</button>
      {/* <div className="filler-text-container">
        <p>This clone is for educational purposes only.</p>
        <p>Please do not put any sensitive information.</p>
      </div> */}
      {/* <div className="line-divide"></div>
      {props.otherForm} */}
    </div>
  );
}

export default SessionForm;
