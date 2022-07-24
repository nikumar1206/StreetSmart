import React from "react";
import { useEffect } from "react";
import BreadcrumbComponent from "./breadcrumb";
import DescriptionComponent from "./description";
import Image from "./image";
import ListerDescriptionContainer from "./listerdescription";
import MapsComponent from "./maps";

function ListingShowComponent(props) {
  useEffect(() => {
    props.removeListings();
    props.fetchListing(props.match.params.listingId);
  }, []);

  if (props.listing) {
    return (
      <div className="listing-show-container">
        <BreadcrumbComponent listing={props.listing} />
        <div className="listing-show-container-top">
          <Image imageUrl={props.listing.imageUrl} />
          <ListerDescriptionContainer
            listing={props.listing}
            saveListing={props.saveListing}
            unSaveListing={props.unSaveListing}
            currentUser={props.currentUser}
          />
        </div>
        <div className="listing-show-container-bot">
          <DescriptionComponent description={props.listing.description} />
          <MapsComponent listing={props.listing} />
        </div>
      </div>
    );
  }
}

export default ListingShowComponent;
