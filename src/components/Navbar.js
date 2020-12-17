import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import TopNav from "./TopNav";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <div className="navbar-collapse">
      <nav className="navbar">
        <div className="navbar-container">
          <img src="images/logo.png" className="app-logo" alt="logo" />

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item-1">
              <Link to="/" className="nav-links-1" onClick={closeMobileMenu}>
                Home
                </Link>
            </li>
            <li
              className="nav-item-1"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/solutions"
                className="nav-links-1"
                onClick={closeMobileMenu}
              >
                Solutions <i className="fas fa-caret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item-1">
              <Link
                to="/kbrofeatures"
                className="nav-links-1"
                onClick={closeMobileMenu}
              >
                K'Bro Features
                </Link>
            </li>
            <li className="nav-item-1">
              <Link
                to="/science"
                className="nav-links-1"
                onClick={closeMobileMenu}
              >
                Science
                </Link>
            </li>
            <li className="nav-item-1">
              <Link
                to="/about"
                className="nav-links-1"
                onClick={closeMobileMenu}
              >
                About
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
