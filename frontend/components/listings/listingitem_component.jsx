import React from "react";

function ListingItemComponent(props) {
  return (
    <li>
      {props.listing.name}
      {props.listing.address}
    </li>
  );
}

export default ListingItemComponent;
