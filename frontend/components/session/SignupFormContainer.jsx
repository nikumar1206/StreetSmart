import { connect } from "react-redux";
import { signup, login } from "../../actions/sessions_actions";
import { closeModal } from "../../actions/modal_actions";
import SessionForm from "./SessionForm";

export const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Sign Up",
});

export const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
  login: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
