import React from "react";
function BreadcrumbComponent({ listing }) {
  const breadcrumbprefix = () => {
    let prefix = "";
    listing.rent_bool ? (prefix = "Rental") : (prefix = "Sales");
    return `${prefix} → ${listing.borough} → ${listing.neighborhood} → ${listing.name}`;
  };
  return (
    <div className="breadcrumb-container">
      <h1 className="breadcrumb">{breadcrumbprefix()}</h1>
    </div>
  );
}

export default BreadcrumbComponent;
