import React, { memo } from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

const MapsComponent = (props) => {
  const containerStyle = {
    width: "40vw",
    height: "70vh",
    overflow: "visible",
  };
  const center = {
    lat: 40.7447,
    lng: -73.85,
  };

  const isLoaded =
    typeof google === "object" && typeof google.maps === "object";

  return (
    isLoaded && (
      <div className="google-maps">
        <div className="gmaps-container">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11.2}
          >
            {props.listings.map((listing) => {
              return (
                <Marker
                  icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPinRed.svg"
                  key={Math.random()}
                  position={{ lat: listing.lat, lng: listing.lng }}
                ></Marker>
              );
            })}
            <TransitLayer />
          </GoogleMap>
        </div>
      </div>
    )
  );
};

export default memo(MapsComponent);
