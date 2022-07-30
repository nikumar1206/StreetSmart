import React from "react";
import ListingItemComponent from "./listingitem_component";
import { withRouter } from "react-router-dom";
function ResultDetails(props) {
  const amenityinclusionchecker = (listing) => {
    const params = Object.fromEntries(
      new URLSearchParams(props.location.search)
    );
    const amenities = JSON.parse(params.amen);
    let amenities_arr = [];
    for (const [key, value] of Object.entries(amenities)) {
      if (value) {
        amenities_arr.push(key);
      }
    }
    return amenities_arr.every((amenity) =>
      listing.amenities.includes(amenity)
    );
  };
  return (
    <>
      <ul className="searchCardList">
        {props.listings.map((listing) => {
          if (props.match.path === "/users/:userId/saved" && !listing.saved) {
            return;
          } else if (
            props.match.path === "/listings/" &&
            !amenityinclusionchecker(listing)
          ) {
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
