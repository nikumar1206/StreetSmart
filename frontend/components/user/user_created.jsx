import React, { useEffect } from "react";
import ResultDetails from "../listings/resultdetails";
import {
  removeListings,
  fetchUserListings,
} from "../../actions/listings_actions";
import { useCurrentUser, useListings } from "../../util/selectors";
import { useDispatch } from "react-redux";

function UserCreatedComponent() {
  const dispatch = useDispatch();
  const currentUser = useCurrentUser();
  const listings = useListings();

  useEffect(() => {
    dispatch(removeListings());
    dispatch(fetchUserListings(currentUser.id));
  }, []);

  return (
    <div className="usercreated-container">
      <h1 className="usercreated-title">Created Listings</h1>
      <ResultDetails listings={listings} />
    </div>
  );
}
export default UserCreatedComponent;
