import React from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

function MapsComponent(props) {
  const [map, setMap] = React.useState(null);
  const containerStyle = {
    width: "400px",
    height: "400px",
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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onUnmount={onUnmount}
    >
      <Marker position={center}></Marker>
      <TransitLayer />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
