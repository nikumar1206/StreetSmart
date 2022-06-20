import React from "react";

import { connect } from "react-redux";
import { login } from "../../actions/sessions_actions";
import SessionForm from "./SessionForm";
import { openModal, closeModal } from "../../actions/modal_actions";

export const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "login",
});

export const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal("signup"))}>Signup</button>
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
