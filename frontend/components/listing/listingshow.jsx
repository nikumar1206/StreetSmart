import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useCurrListing, useCurrentUser } from "../../util/selectors";
import { withRouter } from "react-router-dom";
import {
  saveListing,
  unSaveListing,
} from "../../actions/save_listings_actions";
import { removeListings, fetchListing } from "../../actions/listings_actions";

import BreadcrumbComponent from "./breadcrumb";
import DescriptionComponent from "./description";
import Image from "./image";
import ListerDescriptionContainer from "./listerdescription";
import MapsComponent from "./maps";
import Spinner from "../spinner/spinner_component";
function ListingShowComponent(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentUser = useCurrentUser();
  const [loaded, isLoaded] = useState(false);
  const listing = useCurrListing(props.match.params.listingId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeListings());
    dispatch(fetchListing(props.match.params.listingId)).then(() =>
      isLoaded(true)
    );
  }, []);

  if (loaded) {
    const { description, imageUrl } = listing;
    return (
      <div className="listing-show-container">
        <BreadcrumbComponent listing={listing} />
        <div className="listing-show-container-top">
          <Image imageUrl={imageUrl} />
          <ListerDescriptionContainer
            listing={listing}
            saveListing={saveListing}
            unSaveListing={unSaveListing}
            currentUser={currentUser}
          />
        </div>
        <div className="listing-show-container-bot">
          <DescriptionComponent description={description} />
          <MapsComponent listing={listing} />
        </div>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default withRouter(ListingShowComponent);
