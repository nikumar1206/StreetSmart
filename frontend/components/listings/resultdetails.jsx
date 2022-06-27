import React from "react";
import ListingItemComponent from "./listingitem_component";

function ResultDetails(props) {
  return (
    <div className="resultdetails">
      <ul>
        {props.listings.map((listing) => {
          return <ListingItemComponent key={listing.id} listing={listing} />;
        })}
      </ul>
    </div>
  );
}

export default ResultDetails;
