import { connect } from "react-redux";
import { fetchListing, removeListings } from "../../actions/listings_actions";
import ListingShowComponent from "./listingshow";

const mapStatetoProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId],
});

const mapDispatchtoProps = (dispatch) => ({
  fetchListing: (listingId) => dispatch(fetchListing(listingId)),
  removeListings: () => dispatch(removeListings()),
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(ListingShowComponent);
