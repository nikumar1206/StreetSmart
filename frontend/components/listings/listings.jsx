import React, { useState } from "react";
import { useEffect } from "react";
function Listings(props) {
  const [state, setState] = useState({
    location: "NYC",
    price: [0],
  });
  // useEffect({});
  return (
    <div className="listings">
      <div className="listings-form-container">
        <select className="location-dropdown" disabled="disabled"></select>
      </div>
    </div>
  );
}

export default Listings;
