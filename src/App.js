import React from "react";
import "./App.css";


import Weathercalls from "./components/Weathercalls";

/*
  const weatherApi = {
  apiUrl: 'https://api.openweathermap.org/data/2.5/',
  apiKey: '8ab41d8883881d150eed8cb9119dcb3b',
  }
  */

export default class App extends React.Component {
 
  render() {
    return (
      <div>
        <header>
          <h1>Weather Report</h1>
        </header>
        <main>
          <Weathercalls></Weathercalls>
        </main>
      </div>
    );
  }
}

