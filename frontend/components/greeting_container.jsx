import { connect } from "react-redux";
import { logout } from "../actions/sessions_actions";

import Greeting from "./greeting";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({ logout: () => dispatch(logout()) });

export const GreetingsContainer = connect(mSTP, mDTP)(Greeting);

export default GreetingsContainer;
