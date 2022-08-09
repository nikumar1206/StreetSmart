import React, { memo, useRef } from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";
const MapsComponent = (props) => {
  const containerStyle = {
    width: "36vw",
    height: "70vh",
    display: "flex",
    justifyContent: "center",
  };

  const center = {
    lat: props.listing.lat,
    lng: props.listing.lng,
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
      <div className="maps-container listing">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker
            icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPinRed.svg"
            position={center}
            onClick={() => setDivContent(props.listing)}
          ></Marker>
          <TransitLayer />
          <div ref={contentDivRef} className={`contentDiv false`}>
            <span ref={nameRef}></span>
            <span ref={priceRef}></span>
          </div>
        </GoogleMap>
      </div>
    )
  );
};

export default memo(MapsComponent);
