import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { createListing } from "../../actions/listings_actions";
const mSTP = (state, ownProps) => ({
  formType: "Create Listing",
  listing: {
    name: "",
    location: "",
    neighborhood: "",
    zip: null,
    price: null,
    property_type: "Townhouse",
    beds: null,
    baths: null,
    lat: null,
    lng: null,
    description: "",
    rent_bool: true,
    borough: "Manhattan",
    imageFile: null,
    imageUrl: null,
  },
});
const mDTP = (dispatch) => ({
  processForm: (listing) => dispatch(createListing(listing)),
});

export default connect(mSTP, mDTP)(ListingForm);
