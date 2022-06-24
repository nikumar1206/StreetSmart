import React from "react";
import BreadcrumbComponent from "./breadcrumb";
import DescriptionComponent from "./description";
import Image from "./image";
import ListerDescriptionContainer from "./listerdescription";
import MapsContainer from "./maps";

function ListingShowComponent(props) {
  return (
    <div className="listing-show-container">
      <BreadcrumbComponent />
      <Image />
      <ListerDescriptionContainer />
      <DescriptionComponent />
      <MapsContainer />
    </div>
  );
}

export default ListingShowComponent;
