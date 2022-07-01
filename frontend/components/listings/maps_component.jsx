import React from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

function MapsComponent(props) {
  // console.log(props);
  const [map, setMap] = React.useState(null);
  const containerStyle = {
    width: "550px",
    height: "400px",
  };
  const center = {
    lat: 40.73413040316269,
    lng: -73.77498038023461,
  };
  const isLoaded =
    typeof google === "object" && typeof google.maps === "object";

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded && center ? (
    <div className="google-maps">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10.135}
        onUnmount={onUnmount}
      >
        {props.listings.map((listing) => {
          return (
            <Marker position={{ lat: listing.lat, lng: listing.lng }}></Marker>
          );
        })}
        <TransitLayer />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
