import { connect } from "react-redux";
import { signup } from "../../actions/sessions_actions";
import { closeModal } from "../../actions/modal_actions";
import SessionForm from "./SessionForm";

export const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "signup",
});

export const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
