import { connect } from "react-redux";
import mainNav from "./main_nav";

export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
});

export const mDTP = (dispatch) => ({});

export const MainNavContainer = connect(null, mDTP)(mainNav);

export default MainNavContainer;
