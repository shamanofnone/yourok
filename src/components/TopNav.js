import React from "react";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="header_top">
      <div className=" flex d-flex flex-row justify-content-end align-items-center">
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://twitter.com/kbrohappyapp"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.facebook.com/YouROKcorp/"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.linkedin.com/company/you-rok-corp/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.youtube.com/channel/UCFPq1GCb4CRq1WaIzVp515g"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              target="_blank"
              href="https://www.instagram.com/kbroapp/?hl=en"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <i className="fa fa-key">Login</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
