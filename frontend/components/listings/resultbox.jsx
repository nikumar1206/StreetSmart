import React from "react";
import ResultDetails from "./resultdetails";
import MapsComponent from "./maps_component";

function ResultBox(props) {
  return (
    <div className="resultbox">
      <ResultDetails listings={props.listings} />
      <MapsComponent listings={props.listings} />
    </div>
  );
}

export default ResultBox;
