import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ListingsFormContainer from "./listings-form-container";
import ResultBoxContainer from "./resultbox_container";
function ListingsIndexComponent(props) {
  const params = Object.fromEntries(new URLSearchParams(props.location.search));
  const [state, setState] = useState(params);

  console.log(props.location.search);
  useEffect(() => {
    const queryString = `?rb_toggle=${state.rb_toggle}&location=${state.location}&maxPrice=${state.maxPrice}`;
    props.fetchListings(queryString);
  }, []);

  useEffect(() => {
    const params = Object.fromEntries(
      new URLSearchParams(props.location.search)
    );
    const queryString = `?rb_toggle=${params.rb_toggle}&location=${params.location}&maxPrice=${params.maxPrice}`;
    props.fetchListings(queryString);
  }, [props.location.search]);

  if (props.listings) {
    return (
      <div className="listings">
        <ListingsFormContainer />
        <ResultBoxContainer listings={props.listings} />
      </div>
    );
  }
}

export default withRouter(ListingsIndexComponent);
