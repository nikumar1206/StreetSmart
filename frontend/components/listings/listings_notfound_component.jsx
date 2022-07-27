import React from "react";

function NoListingsComponent() {
  return (
    <section className="nolistings-comp">
      <div className="flex-container">
        <h1 className="nolistings-title">No results matched your search.</h1>
        <img
          className="nolistings-image"
          src="https://cdn-assets-s3.streeteasy.com/assets/svg/srp/empty_search-7576b0cfe1654fa1a68d83d37eac6d2edddcf4464179f8731c2ed4f86caf16e5.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export default NoListingsComponent;
