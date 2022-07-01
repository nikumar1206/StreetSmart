import React from "react";
import ListingForm from "./listing_form";

function fetchEditForm(props) {
  useEffect(() => {
    props.fetchListing(props.match.params.pinId);
  }, []);

  if (props.listing) {
    return (
      <div className="fetchEditForm">
        <ListingForm
          action={action}
          formType={formType}
          listing={props.listing}
        />
      </div>
    );
  }
}

export default fetchEditForm;
