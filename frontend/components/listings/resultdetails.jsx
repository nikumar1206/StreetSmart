import React from "react";
import ListingItemComponent from "./listingitem_component";

function ResultDetails(props) {
  return (
    <div className="resultdetails">
      <ul>
        {props.listings.map((listing) => (
          <ListingItemComponent key={listing.id} listing={listing} />
        ))}
      </ul>
    </div>
  );
}

export default ResultDetails;
