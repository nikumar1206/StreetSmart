import React, { Component } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { receiveListing } from "../../actions/listings_actions";
import { createListing } from "../../util/listing_api_util";
function ListingForm(props) {
  const [state, setState] = useState(() => props.listing);
  const dispatch = useDispatch();
  const update = (field) => (e) =>
    setState({ ...state, [field]: e.target.value });

  const handleFile = (e) => {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];

    fileReader.onloadend = () => {
      setState((prevState) => {
        return { ...prevState, imageFile: file };
      });
      setState((prevState) => {
        return { ...prevState, imageUrl: fileReader.result };
      });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      setState({ ...state }, { imageFile: null });
      setState({ ...state }, { imageUrl: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("listing[name]", state.name);
    formData.append("listing[rent_bool]", state.rent_bool);
    formData.append("listing[neighborhood]", state.neighborhood);
    formData.append("listing[borough]", state.borough);
    formData.append("listing[zip]", state.zip);
    formData.append("listing[property_type]", state.property_type);
    formData.append("listing[price]", state.price);
    formData.append("listing[beds]", state.beds);
    formData.append("listing[baths]", state.baths);
    formData.append("listing[lat]", state.lat);
    formData.append("listing[lng]", state.lng);
    formData.append("listing[description]", state.description);

    if (state.imageFile) {
      formData.append("listing[photo]", state.imageFile);
    }
    createListing(formData).then((listing) => {
      dispatch(receiveListing(listing));
      props.history.push(`/listings/${listing.id}`);
    });
  };
  return (
    <div className="listing-form-container">
      <h1 className="listingFormTitle">{props.formType}</h1>
      <form onSubmit={handleSubmit} className="listing-form" id="listing-form">
        <label className="listing-form-label" htmlFor="name">
          Street Address
        </label>
        <input
          type="text"
          onChange={update("name")}
          className="listingFormInput"
          id="name"
          name="street-address"
          required
        />
        <br />
        <label className="rb-toggle" htmlFor="rb-toggle">
          What type of sale is this?
        </label>
        <select name="rb-toggle" onChange={update("rent_bool")} id="rb-toggle">
          <option value={true}>Rental</option>
          <option value={false}>For Sale</option>
        </select>
        <br />
        <label className="listing-form-label" htmlFor="neighborhood">
          Neighborhood
        </label>
        <input
          onChange={update("neighborhood")}
          type="text"
          className="listingFormInput"
          id="neighborhood"
          name="neighborhood"
          maxLength={30}
          required
        />
        <br />
        <label className="listing-form-label" htmlFor="borough">
          Borough
        </label>
        <select name="borough" onChange={update("borough")} id="borough">
          <option value="Manhattan">Manhattan</option>
          <option value="Queens">Queens</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Staten Island">Staten Island</option>
          <option value="Bronx">Bronx</option>
        </select>
        <br />
        <label className="listing-form-label" htmlFor="zip">
          Zip
        </label>
        <input
          onChange={update("zip")}
          type="text"
          className="listingFormInput"
          id="zip"
          maxLength={5}
          name="zip"
          required
        />
        <br />
        <label className="listing-form-label" htmlFor="price">
          Price
        </label>
        <input
          onChange={update("price")}
          type="text"
          className="listingFormInput"
          id="price"
          name="price"
          required
        />
        <br />
        <label className="listing-form-label" htmlFor="property_type">
          Property Type
        </label>
        <select
          name="propertyTypes"
          onChange={update("property_type")}
          id="propertyTypes"
        >
          <option value="townhouse">Townhouse</option>
          <option value="condo">Condo</option>
          <option value="penthouse">Penthouse</option>
          <option value="apartment">Apartment</option>
          <option value="single-family house">Single Family</option>
          <option value="multi-family house">Multi-family House</option>
        </select>
        <br />
        <label className="listing-form-label" htmlFor="beds">
          Bedrooms
        </label>
        <input
          onChange={update("beds")}
          type="text"
          className="listingFormInput"
          id="beds"
          maxLength={2}
          required
          name="beds"
        />
        <br />
        <label className="listing-form-label" htmlFor="baths">
          Bathrooms
        </label>
        <input
          onChange={update("baths")}
          type="text"
          className="listingFormInput"
          id="baths"
          maxLength={2}
          required
          name="baths"
        />
        <br />
        <div className="lat-lng">
          <label className="listing-form-label" htmlFor="lat">
            Latitude: &nbsp;
          </label>
          <input
            onChange={update("lat")}
            type="text"
            className="listingFormInput lat-lng-input"
            id="lat"
            maxLength="10"
            required
            name="lat"
          />
          &nbsp;&nbsp;
          <label className="listing-form-label" htmlFor="lng">
            Longitude: &nbsp;
          </label>
          <input
            onChange={update("lng")}
            type="text"
            className="listingFormInput lat-lng-input"
            id="lng"
            maxLength="10"
            required
            name="lng"
          />
        </div>
        <br />
        <label className="listing-form-label" htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          onChange={update("description")}
          cols="30"
          rows="10"
        />
        <input
          type="file"
          onChange={handleFile}
          name="myImage"
          accept="image/*"
          required
          multiple={false}
        />

        <button type="submit" className="listingFormButton">
          {props.formType}
        </button>
      </form>
    </div>
  );
}

export default ListingForm;
