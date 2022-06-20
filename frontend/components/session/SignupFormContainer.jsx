import { connect } from "react-redux";
import { signup } from "../../actions/sessions_actions";
import SessionForm from "./SessionForm";

export const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  formType: "signup",
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
