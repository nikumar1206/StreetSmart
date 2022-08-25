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

const ListingShowComponent = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentUser = useCurrentUser();
  const listing = useCurrListing(props.match.params.listingId);
  const dispatch = useDispatch();

  useEffect(() => {
    getListing();
  }, [currentUser]);

  const getListing = () => {
    dispatch(removeListings());
    dispatch(fetchListing(props.match.params.listingId));
  };

  if (listing) {
    const { description, imageUrl, amenities } = listing;
    return (
      <div className="listing-show-container">
        <BreadcrumbComponent listing={listing} />
        <div className="listingshow-split">
          <div className="listing-show-container-left">
            <div className="image-container">
              <img src={imageUrl} />
            </div>
            <DescriptionComponent
              description={description}
              amenities={amenities}
            />
          </div>
          <div className="listing-show-container-right">
            <ListerDescriptionContainer
              listing={listing}
              saveListing={saveListing}
              unSaveListing={unSaveListing}
              currentUser={currentUser}
            />
            <MapsComponent listing={listing} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading-spinner-container">
        <Spinner />
      </div>
    );
  }
};

export default withRouter(ListingShowComponent);
