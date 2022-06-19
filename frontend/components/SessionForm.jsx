import React, { useState } from "react";

function SessionForm(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field) => {
    setValues((values) => ({ ...values, [field]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...values };
    props.processForm(user);
  };

  return (
    <div className="session-form">
      <form>
        <label>
          Email:
          <input
            type="text"
            value={values.email}
            onChange={() => handleChange("email")}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={values.password}
            onChange={() => handleChange("password")}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit!
        </button>
      </form>
    </div>
  );
}

export default SessionForm;
