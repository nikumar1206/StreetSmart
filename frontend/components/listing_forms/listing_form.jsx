import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useListingErrors } from "../../util/selectors";
function ListingForm(props) {
  const history = useHistory();
  const errors = useListingErrors();
  const [state, setState] = useState(() => props.listing);
  const [amenities, setAmenities] = useState({});

  useEffect(() => {
    if (props.match.path === "/listings/:listingId/edit") {
      const amenities_arr = props.listing.amenities;
      let amenities = {
        "Pets Allowed": false,
        Doorman: false,
        "Private Outdoor Space": false,
        Elevator: false,
        Dishwasher: false,
        Laundromat: false,
      };
      amenities_arr.forEach((amenity) => {
        amenities[amenity] = true;
      });
      setAmenities(amenities);
    } else {
      setAmenities(props.listing.amenities);
    }
  }, []);

  const update = (field) => (e) =>
    setState({ ...state, [field]: e.target.value });

  const updateAmenities = (field) => {
    return () => setAmenities({ ...amenities, [field]: !amenities[field] });
  };

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

    if (props.listingId) {
      formData.append("listing[id]", props.listingId);
    }

    if (state.imageFile) {
      formData.append("listing[photo]", state.imageFile);
    }

    let amenitiesArr = [];

    for (const [key, value] of Object.entries(amenities)) {
      if (value) {
        amenitiesArr.push(key);
      }
    }
    formData.append("listing[amenities]", amenitiesArr);

    props.action(formData).then((listing) => {
      if (listing) {
        history.push(`/listings/${listing.id}`);
      }
    });
  };

  if (JSON.stringify(amenities) !== "{}") {
    return (
      <div className="listing-form-container">
        <h1 className="listingFormTitle">{props.formType}</h1>
        <form
          onSubmit={handleSubmit}
          className="listing-form"
          id="listing-form"
        >
          <label className="rb-toggle" htmlFor="rb-toggle">
            What type of sale is this?
          </label>
          <select
            name="rb-toggle"
            onChange={update("rent_bool")}
            id="rb-toggle"
          >
            <option value={true}>Rental</option>
            <option value={false}>For Sale</option>
          </select>
          <br />
          <label className="listing-form-label" htmlFor="name">
            Street Address
          </label>
          <input
            type="text"
            onChange={update("name")}
            className="listingFormInput"
            id="name"
            name="street-address"
            value={state.name}
            required
          />
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
            value={state.neighborhood}
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
            value={state.zip}
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
            value={state.price}
            required
            maxLength={8}
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
          <div className="beds-baths">
            <div className="listing-form-beds">
              <label className="listing-form-label" htmlFor="beds">
                Bedrooms
              </label>
              <input
                onChange={update("beds")}
                type="text"
                className="listingFormInput beds-bath-input"
                id="beds"
                maxLength={2}
                value={state.beds}
                required
                name="beds"
              />
            </div>
            <div className="listing-form-baths">
              <label className="listing-form-label" htmlFor="baths">
                Bathrooms
              </label>
              <input
                onChange={update("baths")}
                type="text"
                className="listingFormInput beds-bath-input"
                id="baths"
                maxLength={2}
                required
                value={state.baths}
                name="baths"
              />
            </div>
          </div>
          <br />
          <div className="lat-lng">
            <div className="listing-form-lat">
              <label className="listing-form-label" htmlFor="lat">
                Latitude
              </label>
              <input
                onChange={update("lat")}
                type="text"
                className="listingFormInput lat-lng-input"
                id="lat"
                maxLength="10"
                value={state.lat}
                required
                name="lat"
              />
            </div>
            <div className="listing-form-lng">
              <label className="listing-form-label" htmlFor="lng">
                Longitude
              </label>
              <input
                onChange={update("lng")}
                type="text"
                className="listingFormInput lat-lng-input"
                id="lng"
                value={state.lng}
                maxLength="10"
                required
                name="lng"
              />
            </div>
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
            value={state.description}
            rows="10"
          />
          <div className="amenities-list">
            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Pets Allowed")}
                checked={amenities["Pets Allowed"]}
              />
              <span>Pets Allowed</span>
            </label>

            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Doorman")}
                checked={amenities["Doorman"]}
              />
              <span>Doorman</span>
            </label>
            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Private Outdoor Space")}
                checked={amenities["Private Outdoor Space"]}
              />
              <span>Private Outdoor Space</span>
            </label>
            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Elevator")}
                checked={amenities["Elevator"]}
              />
              <span>Elevator</span>
            </label>
            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Dishwasher")}
                checked={amenities["Dishwasher"]}
              />
              <span>Dishwasher</span>
            </label>
            <label className="amenities-opt">
              <input
                type="checkbox"
                onChange={updateAmenities("Laundromat")}
                checked={amenities["Laundromat"]}
              />
              <span>Laundromat</span>
            </label>
          </div>
          <input
            className="fileupload-input"
            type="file"
            onChange={handleFile}
            name="myImage"
            accept="image/*"
            required
            // value={state.image}
            multiple={false}
          />
          <div className="listing-errors-container">
            {errors.map((err, idx) => {
              return (
                <p className="error-msg" key={idx}>
                  {err}
                </p>
              );
            })}
          </div>

          <button type="submit" className="listingFormButton">
            {props.formType}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ListingForm);
