import { connect } from "react-redux";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/sessions_actions";
import HomeSplash from "./homesplash";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export const HomeSplashContainer = connect(mSTP, mDTP)(HomeSplash);

export default HomeSplashContainer;
