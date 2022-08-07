import React, { memo } from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

const MapsComponent = (props) => {
  const containerStyle = {
    width: "36vw",
    height: "70vh",
  };

  const center = {
    lat: props.listing.lat,
    lng: props.listing.lng,
  };

  const isLoaded =
    typeof google === "object" && typeof google.maps === "object";

  return (
    isLoaded && (
      <div className="maps-container listing">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker
            icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPinlarge.svg"
            position={center}
          ></Marker>
          <TransitLayer />
        </GoogleMap>
      </div>
    )
  );
};

export default memo(MapsComponent);
