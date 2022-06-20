import { connect } from "react-redux";
import { logout } from "../actions/sessions_actions";
import navUser from "./nav_user";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({ logout: () => dispatch(logout()) });

export const NavUserContainer = connect(mSTP, mDTP)(navUser);

export default NavUserContainer;
