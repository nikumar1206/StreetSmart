import React, { Component } from "react";
import ResultDetailsContainer from "./resultdetails_container";
import MapsComponent from "./maps_component";

function ResultBox(props) {
  return (
    <div className="resultbox">
      {console.log(props)}
      <ResultDetailsContainer />
      <div className="result-vertical-divider"></div>
      <MapsComponent listing={props.listings.first} />
    </div>
  );
}

export default ResultBox;
