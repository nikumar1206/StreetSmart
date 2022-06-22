import { connect } from "react-redux";
import Listings from "./listings";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({});

export const ListingsContainer = connect(mSTP, mDTP)(Listings);

export default ListingsContainer;
