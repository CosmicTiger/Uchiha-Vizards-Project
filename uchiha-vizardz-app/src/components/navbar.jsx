import React, { Component } from "react";

const NavBar = ({ navbar }) => {
  return (
    <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#HOME">
        <img src="./images/vizardslogo.png" alt="vizardz_logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerVizardz"
        aria-controls="navbarTogglerVizardz"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerVizardz">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="#HOME">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#LEADER">
              Leaderboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#CARDS">
              Cartas mas buscadas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
