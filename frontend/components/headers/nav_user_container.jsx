import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/sessions_actions";
import navUser from "./nav_user";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export const NavUserContainer = connect(mSTP, mDTP)(navUser);

export default NavUserContainer;
