import React from "react";
import "./Weathercalls.css";

export default class WeatherToday extends React.Component {
  render() {
    /*
    let antal = [];
    antal = this.props.todaysTemperatures;
    let antalTwo = antal.length;
    console.log(antalTwo);
    */

    return (
      <div>
        <h3>Location</h3>
        <p>{this.props.place}</p>
        <h3>Temperature</h3>
        <p>{this.props.temperature}°</p>
        <h3>Wind Speed</h3>
        <p>{this.props.windSpeed} meter/sec</p>
        <h3>Humidity</h3>
        <p>{this.props.humidity}%</p>
        <h3>Sunrise</h3>
        <p>{this.props.sunrise}</p>
        <h3>Sunset</h3>
        <p>{this.props.sunset}</p>
        <div>
          <p>{this.props.todaysTimestamps[0]}</p>
          <p>{this.props.todaysTemperatures[0]}°</p>
        </div>
      </div>
    );
  }
}
