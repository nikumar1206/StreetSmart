import React from "react";
function BreadcrumbComponent(props) {
  const { listing } = props;
  const breadcrumbprefix = () => {
    if (listing.rent_bool) {
      return `Rental → ${listing.borough} → ${listing.neighborhood} → ${listing.name}`;
    } else {
      return `Sales → ${listing.borough} → ${listing.neighborhood} → ${listing.name}`;
    }
  };
  return (
    <div className="breadcrumb-container">
      <h1 className="breadcrumb">{breadcrumbprefix()}</h1>
    </div>
  );
}

export default BreadcrumbComponent;
