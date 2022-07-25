import React from "react";
import { useEffect } from "react";
import ListingsForm from "./listings_form";
import ResultBox from "./resultbox";
import { useCurrentUser, useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { fetchListings, removeListings } from "../../actions/listings_actions";
import { withRouter } from "react-router-dom";
function ListingsIndexComponent(props) {
  const currentUser = useCurrentUser();
  const dispatch = useDispatch();
  const params = Object.fromEntries(new URLSearchParams(props.location.search));
  const { rb_toggle, maxPrice, location } = params;
  let queryString = `?rb_toggle=${rb_toggle}&location=${location}&maxPrice=${maxPrice}`;

  const listings = useListings();

  useEffect(() => {
    dispatch(removeListings());
    dispatch(fetchListings(queryString));
  }, [props.location.search, currentUser]);

  if (listings) {
    return (
      <div className="listings">
        <ListingsForm />
        <ResultBox listings={listings} />
      </div>
    );
  }
}

export default withRouter(ListingsIndexComponent);
