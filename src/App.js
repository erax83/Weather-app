import React from "react";
import "./App.css";

import Weathercalls from "./components/Weathercalls";

// This class only renders the apps heading and then all other
// code in the Weathercalls component.
export default class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <header id="headingId">
          <h1>Weather Report</h1>
        </header>

        <main>
          <Weathercalls></Weathercalls>
        </main>
      </div>
    );
  }
}
