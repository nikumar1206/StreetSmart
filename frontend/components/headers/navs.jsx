import React from "react";
import MainNav from "./main_nav";
import UserNav from "./user_nav";
import { useCurrentUser } from "../../util/selectors";
import {
  useLogout,
  useOpenModal,
  useFetchListings,
  useRemoveListings,
} from "../../util/dispatches";

const NavBars = () => {
  const currentUser = useCurrentUser();
  const logout = useLogout();
  const openModal = useOpenModal();
  const fetchListings = useFetchListings();
  const removeListings = useRemoveListings();
  return (
    <div className="navs-container">
      <UserNav
        currentUser={currentUser}
        logout={logout}
        openModal={openModal}
      />
      <MainNav
        removeListings={removeListings}
        currentUser={currentUser}
        fetchListings={fetchListings}
        openModal={openModal}
      />
    </div>
  );
};
export default NavBars;
