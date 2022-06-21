import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/sessions_actions";
import searchMod from "./searchmod";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export const SearchModContainer = connect(null, mDTP)(searchMod);

export default SearchModContainer;
