import { connect } from "react-redux";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state) => ({
  modal: state.ui.modal,
});

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(Modal);
