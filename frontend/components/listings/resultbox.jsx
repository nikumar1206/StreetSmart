import React, { Component } from "react";
import ResultDetailsContainer from "./resultdetails_container";

function ResultBox(props) {
  return (
    <div className="resultbox">
      <ResultDetailsContainer />
      <div className="maps-container"></div>
    </div>
  );
}

export default ResultBox;
