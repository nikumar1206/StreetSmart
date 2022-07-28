import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { useDispatch } from "react-redux";
function ThankYouContainer() {
  const dispatch = useDispatch();
  return (
    <div className="thankyou-container">
      <span className="modal-close" onClick={() => dispatch(closeModal())}>
        &times;
      </span>
      <h1 className="thankyou-title">Thank You!</h1>
      <p>Thank you for taking the time to check out my app!</p>
      <p>
        Try checking out my other projects on{" "}
        <a
          id="github-link"
          target="_blank"
          href="https://github.com/nikumar1206"
        >
          GitHub
        </a>
      </p>
      <span>or</span>
      <p>
        Send me a message through my{" "}
        <a id="personal-link" target="_blank" href="http://nikhil-kumar.tk/">
          Personal Website
        </a>
      </p>
      <img
        className="thankyou-img"
        src="https://streetsmart-safeassets.s3.amazonaws.com/thank_you.svg"
        alt=""
      />
    </div>
  );
}

export default ThankYouContainer;
