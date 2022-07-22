import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListingsFormContainer from "./listings-form-container";
import ResultBox from "./resultbox";
function ListingsIndexComponent(props) {
  let params = Object.fromEntries(new URLSearchParams(props.location.search));
  let queryString = `?rb_toggle=${params.rb_toggle}&location=${params.location}&maxPrice=${params.maxPrice}`;
  const [state, setState] = useState(params);

  const listings = useSelector(
    (state) => Object.values(state.entities.listings),
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );

  useEffect(() => {
    props.removeListings();
    props.fetchListings(queryString);
  }, [props.location.search, props.currentUser]);

  if (listings != [null]) {
    return (
      <div className="listings">
        <ListingsFormContainer />
        <ResultBox listings={listings} />
      </div>
    );
  } else {
    return <h1>notworking</h1>;
  }

  // {
  //   props.listings ? (
  //     <div className="listings">
  //       <ListingsFormContainer />
  //       <ResultBox listings={props.listings} />
  //     </div>
  //   ) : null;
  // }
}

export default ListingsIndexComponent;
