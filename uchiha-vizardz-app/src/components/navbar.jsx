import React, { Component } from "react";

const NavBar = ({ navbar }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#vizardz-navbar-collpase-1"
            aria-expanded="false"
          >
            <span className="sr-only"> Toggle Navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="header">
            <img src="./images/vizardslogo.png" alt="vizardz_logo" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="logo-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#HOME" className="nav-item">
                HOME
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
