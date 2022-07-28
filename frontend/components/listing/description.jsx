import React from "react";
function DescriptionComponent({ description, amenities }) {
  return (
    <div className="description-container">
      <h1>Description</h1>
      <p>{description}</p>
      <div className="description-divider"></div>
      <h1>Amenities</h1>
      <section className="amenities-list">
        {amenities.map((amenity, idx) => {
          return (
            <div className="amenity-item" key={idx}>
              <p className="amenity-title">{amenity}</p>
              <img
                className="amenity-img"
                src={`https://streetsmart-safeassets.s3.amazonaws.com/amenities/${amenity}.svg`}
                alt=""
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default DescriptionComponent;
