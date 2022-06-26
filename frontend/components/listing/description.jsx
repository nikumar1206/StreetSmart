import React from "react";
function DescriptionComponent(props) {
  return (
    <div className="description-container">
      <h1>Description</h1>
      <p>{props.description}</p>
      <div className="description-divider"></div>
      <h1>Amenities</h1>
    </div>
  );
}

export default DescriptionComponent;
