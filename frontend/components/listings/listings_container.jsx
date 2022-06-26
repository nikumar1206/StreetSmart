import { connect } from "react-redux";
import { fetchListings } from "../../actions/listings_actions";
import Listings from "./listings";

export const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  listings: Object.values(state.entities.listings),
});

export const mDTP = (dispatch) => ({
  fetchListings: (filter) => dispatch(fetchListings(filter)),
});

export const ListingsContainer = connect(mSTP, mDTP)(Listings);

export default ListingsContainer;
