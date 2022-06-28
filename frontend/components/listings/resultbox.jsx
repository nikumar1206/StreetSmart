import React, { Component } from "react";
import ResultDetailsContainer from "./resultdetails_container";
import MapsComponent from "./maps_component";

function ResultBox(props) {
  return (
    <div className="resultbox">
      <ResultDetailsContainer />
      <div className="result-vertical-divider"></div>
      <MapsComponent listing={props.listings[0]} />
    </div>
  );
}

export default ResultBox;
