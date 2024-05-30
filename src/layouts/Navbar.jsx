import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/Links";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={appLinks?.Landing} className="navbar-brand">
          ReactSetup
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={appLinks?.Dashboard}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={appLinks?.Contact}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={appLinks?.AboutUs}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
