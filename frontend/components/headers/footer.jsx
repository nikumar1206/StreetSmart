import React from "react";

function FooterComponent(props) {
  return (
    <div className="footer">
      <ul className="footer-icon-links"></ul>
      <p className="footer-disclaimer">
        StreetSmart is not a brand nor a registered trademark of Zillow, Inc.
        This demo is for educational purposes only
      </p>
      <div className="footer-copyright">
        <span className="footer-copyright-pt1">
          StreetSmart &copy; Nikhil Kumar 2022
        </span>
        <span className="footer-dot"> · </span>
        <span className="footer-copyright-pt2">Made in NYC</span>
        <span className="footer-dot"> · </span>
        <span className="footer-copyright-pt3">
          Powered by Javascript, Rails, React
        </span>
      </div>
      <img
        className="footer-image"
        src="https://streetsmart-safeassets.s3.amazonaws.com/images/footer.svg"
      />
    </div>
  );
}

export default FooterComponent;
