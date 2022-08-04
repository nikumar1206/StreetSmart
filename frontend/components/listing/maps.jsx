import React from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

function MapsComponent(props) {
  const [map, setMap] = React.useState(null);
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

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="maps-container listing">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onUnmount={onUnmount}
      >
        <Marker
          nimation={"BOUNCE"}
          icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPin.svg"
          position={center}
        ></Marker>
        <TransitLayer />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
