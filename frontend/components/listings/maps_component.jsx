import React, { memo, useEffect, useRef, useState } from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

const MapsComponent = (props) => {
  const history = useHistory();
  const containerStyle = {
    width: "40vw",
    height: "70vh",
    position: "fixed",
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
  const checkScrollDistance = () => {
    let body = document.getElementById("root");
    let gmaps = document.getElementsByClassName("gmaps")[0];

    let height = body.clientHeight;
    let refinedHeight = height - 90 - 95 - 500 - 700;

    if (gmaps) {
      if (window.scrollY > refinedHeight) {
        gmaps.style.position = "absolute";
        gmaps.style.top = `${refinedHeight}px`;
      } else {
        gmaps.style.position = "fixed";
        gmaps.style.removeProperty("top");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollDistance);
  }, []);

  const isLoaded =
    typeof google === "object" && typeof google.maps === "object";

  return (
    isLoaded && (
      <div className="gmaps-container">
        <div className={`gmaps`}>
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
      </div>
    )
  );
};

export default memo(MapsComponent);
