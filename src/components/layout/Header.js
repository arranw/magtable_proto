import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background: #52616b;
  border-bottom: 2px solid #4ecca3;
`;

const HeaderBranding = styled.h2`
  color: #eee;
  margin: 0;
  padding: 0.5rem;
`;

const NavLink = styled.span`
  margin-left: auto;
`;

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
            <a className="nav-link" href="#">
              Table
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="assign">
              Assign
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Snags
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
