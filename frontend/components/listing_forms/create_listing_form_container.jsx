import { connect } from "react-redux";
import ListingForm from "./listing_form";
import { createListing } from "../../actions/listings_actions";
const mSTP = (state, ownProps) => ({
  formType: "Create Listing",
  listing: {
    name: "",
    location: "",
    neighborhood: "",
    zip: "",
    price: "",
    property_type: "Townhouse",
    beds: "",
    baths: "",
    lat: "",
    lng: "",
    description: "",
    rent_bool: true,
    borough: "Manhattan",
    imageFile: null,
    imageUrl: null,
  },
});
const mDTP = (dispatch) => ({
  action: (listing) => dispatch(createListing(listing)),
});

export default connect(mSTP, mDTP)(ListingForm);
