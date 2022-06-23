import React, { useState } from "react";
import { useEffect } from "react";
import ListingsFormContainer from "./listings-form-container";
import ResultBoxContainer from "./resultbox_container";
function Listings(props) {
  const [state, setState] = useState({
    location: "NYC",
    price: [0],
  });
  // useEffect({}, []);

  return (
    <div className="listings">
      <ListingsFormContainer />
      <ResultBoxContainer />
    </div>
  );
}

export default Listings;
