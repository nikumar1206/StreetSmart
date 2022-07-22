import React from "react";
import ResultDetails from "./resultdetails";
import MapsComponent from "./maps_component";
import { useSelector } from "react-redux";

function ResultBox(props) {
  const listings = useSelector(
    (state) => Object.values(state.entities.listings),
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );
  return (
    <div className="resultbox">
      <ResultDetails listings={listings} />
      <MapsComponent listings={listings} />
    </div>
  );
}

export default ResultBox;
