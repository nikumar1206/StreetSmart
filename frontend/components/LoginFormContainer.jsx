import { connect } from "react-redux";
import { login } from "../actions/sessions_actions";
import SessionForm from "./SessionForm";

export const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "login",
  // ownProps,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
