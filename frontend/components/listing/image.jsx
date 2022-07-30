import React from "react";

function Image(props) {
  return (
    <div className="image-container">
      <img src={props.imageUrl} />
    </div>
  );
}

export default Image;
