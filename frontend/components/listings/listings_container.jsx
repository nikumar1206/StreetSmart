import { connect } from "react-redux";
import { fetchListings, removeListings } from "../../actions/listings_actions";
import ListingsIndexComponent from "./listings_index";

export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings),
  savedListings: Object.values(state.entities.users[state.session.id]),
});

export const mDTP = (dispatch) => ({
  fetchListings: (filter) => dispatch(fetchListings(filter)),
  removeListings: () => dispatch(removeListings()),
});

export default connect(mSTP, mDTP)(ListingsIndexComponent);
