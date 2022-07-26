import React from "react";
import ResultDetails from "./resultdetails";
import MapsComponent from "./maps_component";
import { useListings } from "../../util/selectors";
function ResultBox() {
  const listings = useListings();

  return (
    <div className="resultbox">
      <ResultDetails listings={listings} />
      <MapsComponent listings={listings} />
    </div>
  );
}

export default ResultBox;
