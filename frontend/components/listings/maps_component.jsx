import React from "react";

import { GoogleMap, Marker, TransitLayer } from "@react-google-maps/api";

function MapsComponent(props) {
  const [map, setMap] = React.useState(null);
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

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded && center ? (
    <div className="google-maps">
      <div className="gmaps-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11.2}
          onUnmount={onUnmount}
        >
          {props.listings.map((listing) => {
            return (
              <Marker
                icon="https://streetsmart-safeassets.s3.amazonaws.com/mapPin.svg"
                key={Math.random()}
                animation={"BOUNCE"}
                position={{ lat: listing.lat, lng: listing.lng }}
              ></Marker>
            );
          })}
          <TransitLayer />
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapsComponent);
