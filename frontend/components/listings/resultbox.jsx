import React from "react";
import ResultDetails from "./resultdetails";
import MapsComponent from "./maps_component";
import NoListingsComponent from "./listings_notfound_component";

function ResultBox({ listings }) {
  return (
    <div className="resultbox">
      {listings.length > 0 ? (
        <ResultDetails listings={listings} />
      ) : (
        <NoListingsComponent />
      )}
      <MapsComponent listings={listings} />
    </div>
  );
}

export default ResultBox;
