import { useSelector } from "react-redux";

export const listing = {
  name: "",
  location: "",
  neighborhood: "",
  zip: "",
  price: "",
  property_type: "Townhouse",
  beds: "",
  baths: "",
  lat: "",
  lng: "",
  description: "",
  rent_bool: true,
  borough: "Manhattan",
  imageFile: null,
  imageUrl: null,
};

export const useCurrentUser = () => {
  return useSelector((state) => state.entities.users[state.session.id]);
};

export const useListings = () => {
  return useSelector(
    (state) => Object.values(state.entities.listings),
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );
};

export const useCreateFormType = () => {
  return "Create Listing";
};
export const useEditFormType = () => {
  return "Edit Listing";
};

// for edit listings
export const useCurrListing = (listingId) => {
  return useSelector((state, ownProps) => state.entities.listings[listingId]);
};

// for create listings
export const useListingErrors = () => {
  return useSelector((state) => state.errors.listings);
};
export const useModal = () => {
  return useSelector((state) => state.ui.modal);
};
