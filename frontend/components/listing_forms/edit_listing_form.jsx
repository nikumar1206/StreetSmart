import React, { useEffect } from "react";
import ListingForm from "./listing_form";

function fetchEditForm(props) {
  useEffect(() => {
    props.fetchListing(props.match.params.listingId);
  }, []);

  if (props.listing) {
    return (
      <div className="fetchEditForm">
        <ListingForm
          action={props.action}
          formType={props.formType}
          listingId={props.listing.id}
          listing={props.listing}
        />
      </div>
    );
  }
}

import { connect } from "react-redux";
import { updateListing, fetchListing } from "../../actions/listings_actions";

const mSTP = (state, ownProps) => ({
  formType: "Update Listing",
  listing: state.entities.listings[ownProps.match.params.listingId],
});

const mDTP = (dispatch) => ({
  action: (listing) => dispatch(updateListing(listing)),
  fetchListing: (listing) => dispatch(fetchListing(listing)),
});

export default connect(mSTP, mDTP)(fetchEditForm);
