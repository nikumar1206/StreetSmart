import React, { useState, useEffect } from "react";
import ListingsForm from "./listings_form";
import ResultBox from "./resultbox";
import { useCurrentUser, useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";
import { fetchListings, removeListings } from "../../actions/listings_actions";
import { withRouter } from "react-router-dom";
import Spinner from "../spinner/spinner_component";

function ListingsIndexComponent(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const params = Object.fromEntries(new URLSearchParams(props.location.search));
  const { rb_toggle, maxPrice, location } = params;
  let queryString = `?rb_toggle=${rb_toggle}&location=${location}&maxPrice=${maxPrice}`;
  const [loaded, isLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const listings = useListings();

  useEffect(() => {
    dispatch(removeListings());
    dispatch(fetchListings(queryString)).then(() => isLoaded(true));
  }, [props.location.search, currentUser]);

  if (loaded) {
    return (
      <div className="listings">
        <ListingsForm />
        <ResultBox listings={listings} />
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default withRouter(ListingsIndexComponent);
