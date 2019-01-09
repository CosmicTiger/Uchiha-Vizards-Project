import React, { Component } from "react";
import NavBar from "./navbar";

const Header = () => {
  return (
    <header className="header" id="#HOME">
      <React.Fragment>
        <NavBar />
      </React.Fragment>

      <div className="header-overlay">
        <div className="container header-container">
          <div className="row">
            <div className="col-md-3">
              <div class="header-text">
                <h1>Bienvenidos a la pagina de la hermandad, Vizardz!</h1>
                <p>
                  Confirma el leaderboard. Apoya con la lista de donaciones de
                  cartas para el clan <br />
                  Revisa los diferentes juegos que estamos frecuentando. Pasa el
                  rato y disfruta!
                </p>
              </div>
            </div>

            <div class="col-md-7 col-md-offset-1">
              <div class="header-shield">
                <img src="./images/vizardslogo.png" alt="header shield" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
