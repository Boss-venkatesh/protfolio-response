import logo from "../logo.png";
import React from "react";
import { Link } from "react-router-dom";
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo....." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="About">
                  about me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  how work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  protfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
