import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ListingsFormContainer from "./listings-form-container";
import ResultBoxContainer from "./resultbox_container";
function Listings(props) {
  const params = Object.fromEntries(new URLSearchParams(props.location.search));
  const [state, setState] = useState(params);

  const queryString = `?rb_toggle=${state.rb_toggle}&location=${state.location}&maxPrice=${state.maxPrice}`;

  useEffect(() => {
    props.fetchListings(queryString);
  }, []);
  return (
    <div className="listings">
      <ListingsFormContainer />
      <ResultBoxContainer />
    </div>
  );
}

export default withRouter(Listings);
