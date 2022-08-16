import React from "react";
import { FaAngleRight } from "react-icons/fa";

const BreadcrumbComponent = ({ listing }) => {
  const { borough, neighborhood, name } = listing;
  let prefix = "";
  listing.rent_bool ? (prefix = "Rental") : (prefix = "Sales");
  return (
    <span className="breadcrumb-container">
      <span>{prefix}</span>
      <FaAngleRight />
      <span>{borough}</span>
      <FaAngleRight />
      <span>{neighborhood}</span>
      <FaAngleRight />
      <span>{name}</span>
    </span>
  );
};

export default BreadcrumbComponent;
