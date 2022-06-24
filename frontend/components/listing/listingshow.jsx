import React from "react";
import { useEffect } from "react";
import BreadcrumbComponent from "./breadcrumb";
import DescriptionComponent from "./description";
import Image from "./image";
import ListerDescriptionContainer from "./listerdescription";
import MapsContainer from "./maps";

function ListingShowComponent(props) {
  // console.log(props);

  useEffect(() => {
    props.fetchListing(props.match.params.listingId);
  }, []);
  // debugger;
  if (props.listing) {
    return (
      <div className="listing-show-container">
        <BreadcrumbComponent />
        <Image imageUrl={props.listing.imageUrl} />
        <ListerDescriptionContainer />
        <DescriptionComponent />
        <MapsContainer />
      </div>
    );
  }
}

export default ListingShowComponent;
