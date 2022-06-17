import React from "react";

export const BenchIndexItem = ({ bench }) => {
  return (
    <ul>
      <p>{bench.description}</p>
      <li>{bench.lat}</li>
      <li>{bench.lng}</li>
    </ul>
  );
};
export default BenchIndexItem;
