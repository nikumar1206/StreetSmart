import React from "react";

function Image(props) {
  console.log(props);
  return (
    <div className="image-container">
      <h1>image container</h1>
      <img src={props.imageUrl} />
    </div>
  );
}

export default Image;
