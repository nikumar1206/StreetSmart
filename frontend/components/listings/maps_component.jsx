import React from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

function MapsComponent(props) {
  const [map, setMap] = React.useState(null);
  const containerStyle = {
    width: "550px",
    height: "400px",
  };

  const center = {
    lat: 50,
    lng: -75,
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
