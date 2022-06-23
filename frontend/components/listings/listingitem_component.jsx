import React from "react";

function ListingItemComponent(props) {
  console.log("cheese");
  return (
    <li>
      {props.listing.name}
      {props.listing.address}
    </li>
  );
}

export default ListingItemComponent;
