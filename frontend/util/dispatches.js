import { useDispatch } from "react-redux";
import { logout } from "../actions/sessions_actions";
import { openModal } from "../actions/modal_actions";
import {
  fetchListings,
  removeListings,
  fetchListing,
  createListing,
  receiveListing,
} from "../actions/listings_actions";

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => dispatch(logout());
};
export const useOpenModal = () => {
  const dispatch = useDispatch();
  return (modal) => dispatch(openModal(modal));
};
export const useFetchListings = (query) => {
  const dispatch = useDispatch();
  return () => dispatch(fetchListings(query));
};
export const useFetchListing = (listingId) => {
  const dispatch = useDispatch();
  return () => dispatch(fetchListing(listingId));
};
export const useRemoveListings = () => {
  const dispatch = useDispatch();
  return () => dispatch(removeListings());
};

export const useCreateListing = () => {
  const dispatch = useDispatch();
  return (formData) => dispatch(createListing(formData));
};

export const useReceiveListing = () => {
  const dispatch = useDispatch();
  return (listing) => dispatch(receiveListing(listing));
};
