import React from "react";
function DescriptionComponent(props) {
  return (
    <div className="description-container">
      <h1>Description</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default DescriptionComponent;
