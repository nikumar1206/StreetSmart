import React from "react";
import ListingItemComponent from "./listingitem_component";
import { withRouter } from "react-router-dom";
function ResultDetails(props) {
  return (
    <>
      <ul className="searchCardList">
        {props.listings.map((listing) => {
          if (props.match.path === "/users/:userId/saved" && !listing.saved) {
            return;
          } else {
            return <ListingItemComponent key={listing.id} listing={listing} />;
          }
        })}
      </ul>
    </>
  );
}

export default withRouter(ResultDetails);
