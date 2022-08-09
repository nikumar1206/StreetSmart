import React, { memo, useRef } from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

const MapsComponent = (props) => {
  const history = useHistory();
  const containerStyle = {
    width: "40vw",
    height: "70vh",
    overflow: "visible",
    display: "flex",
    justifyContent: "center",
  };

  const center = {
    lat: 40.7447,
    lng: -73.85,
  };

  const contentDivRef = useRef(null);
  const nameRef = useRef("");
  const priceRef = useRef("");
  const listingRef = useRef(null);
  const closeDivContent = () => {
    if (contentDivRef.current) {
      contentDivRef.current.style.display = "none";
    }
  };
  const setDivContent = (listing) => {
    listingRef.current = listing;
    if (contentDivRef.current) {
      contentDivRef.current.style.display = "flex";
      nameRef.current.innerText = `${listing.name}`;
      priceRef.current.innerText = `$${listing.price.toLocaleString()}`;
    }
  };

  const isLoaded =
    typeof google === "object" && typeof google.maps === "object";

  return (
    isLoaded && (
      <div className="gmaps-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11.2}
          onClick={closeDivContent}
        >
          {props.listings.map((listing) => {
            return (
              <Marker
                icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPinRed.svg"
                key={Math.random()}
                position={{ lat: listing.lat, lng: listing.lng }}
                onClick={() => setDivContent(listing)}
              ></Marker>
            );
          })}
          <TransitLayer />
          <div
            ref={contentDivRef}
            className={`contentDiv false`}
            onClick={() => history.push(`/listings/${listingRef.current.id}`)}
          >
            <span ref={nameRef}></span>
            <span ref={priceRef}></span>
          </div>
        </GoogleMap>
      </div>
    )
  );
};

export default memo(MapsComponent);
