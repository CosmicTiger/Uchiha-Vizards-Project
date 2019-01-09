import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import React, { Component } from "react";
import Header from "./components/header";
import Leaderboard from "./components/leaderboard";
import Card from "./components/card";
import Footer from "./components/footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <br />
        <Leaderboard />
        <br />
        <Card />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

/** 
 *  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
*/
