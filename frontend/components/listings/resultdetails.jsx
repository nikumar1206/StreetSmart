import React from "react";
import ListingItemComponent from "./listingitem_component";

function ResultDetails(props) {
  return (
    <>
      <ul className="searchCardList">
        {props.listings.map((listing) => {
          return <ListingItemComponent key={listing.id} listing={listing} />;
        })}
      </ul>
    </>
  );
}

export default ResultDetails;
