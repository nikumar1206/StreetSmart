import { connect } from "react-redux";
import ListingsForm from "./listings_form";

export const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
});
export const mDTP = (dispatch) => ({});

export const ListingsFormContainer = connect(mSTP, mDTP)(ListingsForm);

export default ListingsFormContainer;
