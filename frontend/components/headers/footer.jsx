import React from "react";
import { FaAngellist, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
function FooterComponent() {
  return (
    <div className="footer">
      <ul className="footer-icon-links">
        <li>
          <a href="https://angel.co/u/nikhil-kumar-525" target={"_blank"}>
            <FaAngellist className="icon-link-fa" />
          </a>
        </li>
        <li>
          <a href="https://github.com/nikumar1206" target={"_blank"}>
            <FaGithubAlt className="icon-link-fa" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nikhilk99/" target={"_blank"}>
            <FaLinkedinIn className="icon-link-fa" />
          </a>
        </li>
      </ul>
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
