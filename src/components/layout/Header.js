import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        MagTable
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/table/view">
              View Table
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/table/assign">
              Assign
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/snags">
              Snags
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
