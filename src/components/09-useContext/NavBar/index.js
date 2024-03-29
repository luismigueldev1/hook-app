import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            useContext
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>

              <NavLink
                to="/login"
                className="nav-link"
                activeClassName="active"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
