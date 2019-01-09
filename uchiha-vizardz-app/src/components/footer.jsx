import React, { Component } from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="copyright">
              <p>
                Copyright &copy; 2019 <a href="#HOME"> - Uchiha Vizardz</a>
              </p>
            </div>
          </div>
          <div className="col-sm-1">
            <div className="social-icons">
              <a href="#HOME" id="social-icons">
                <i className="fa fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
