import { connect } from "react-redux";
import { fetchListing, removeListings } from "../../actions/listings_actions";
import {
  saveListing,
  unSaveListing,
} from "../../actions/save_listings_actions";
import ListingShowComponent from "./listingshow";

const mapStatetoProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchtoProps = (dispatch) => ({
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  removeListings: () => dispatch(removeListings()),
  saveListing: (listingId) => dispatch(saveListing(listingId)),
  unSaveListing: (listingId) => dispatch(unSaveListing(listingId)),
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ListingShowComponent);
