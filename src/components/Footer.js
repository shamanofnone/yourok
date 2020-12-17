import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container-1">
        <ul className="nav-menu">
          <li className="nav-item">© 2016-2018 YouROK Corp.</li>
          <li className="nav-item">
            <a className="nav-link-2" href="privacy">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link-2" href="termsofuse">
              Terms of Use
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link-2" href="faqs">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link-2" href="careers">
              Careers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link-2" href="press">
              Press
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link-2" href="./Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
