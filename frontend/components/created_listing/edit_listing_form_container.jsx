import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { updateListing } from "../../actions/listings_actions";

const mSTP = (state, ownProps) => ({
  formType: "Update Listing",
  listing: state.entities.listings[ownProps.match.params.listingId],
});
const mDTP = (dispatch) => ({
  processForm: (listing) => dispatch(updateListing(listing)),
  fetchListing: (listing) => dispatch(fetchListing(listing)),
});

export default connect(mSTP, mDTP)(fetchEditForm);
