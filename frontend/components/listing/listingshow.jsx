import React from "react";
import { useEffect } from "react";
import BreadcrumbComponent from "./breadcrumb";
import DescriptionComponent from "./description";
import Image from "./image";
import ListerDescriptionContainer from "./listerdescription";
import MapsContainer from "./maps";

function ListingShowComponent(props) {
  useEffect(() => {
    props.fetchListing(props.match.params.listingId);
  }, []);

  if (props.listing) {
    return (
      <div className="listing-show-container">
        <BreadcrumbComponent listing={props.listing} />
        <div className="listing-show-container-top">
          <Image imageUrl={props.listing.imageUrl} />
          <div className="divider"></div>
          <ListerDescriptionContainer listing={props.listing} />
        </div>
        <DescriptionComponent description={props.listing.description} />
        <MapsContainer />
      </div>
    );
  }
}

export default ListingShowComponent;
