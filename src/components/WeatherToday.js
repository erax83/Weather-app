import React from "react";


export default class WeatherToday extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.todaysTimestamps[0]}</p>
        <p>{this.props.todaysTemperatures[0]}</p>
        <p>{this.props.todaysTimestamps[1]}</p>
        <p>{this.props.todaysTemperatures[1]}</p>
        <p>{this.props.todaysTimestamps[2]}</p>
        <p>{this.props.todaysTemperatures[2]}</p>
        <p>{this.props.todaysTimestamps[3]}</p>
        <p>{this.props.todaysTemperatures[3]}</p>
        <p>{this.props.todaysTimestamps[4]}</p>
        <p>{this.props.todaysTemperatures[4]}</p>
        <h3>Location</h3>
        <p>{this.props.place}</p>
        <h3>Temperature</h3>
        <p>{this.props.temperature}</p>
        <h3>Wind Speed</h3>
        <p>{this.props.windSpeed}</p>
        <h3>Humidity</h3>
        <p>{this.props.humidity}</p>
        <h3>Sunrise</h3>
        <p>{this.props.sunrise}</p>
        <h3>Sunset</h3>
        <p>{this.props.sunset}</p>
      </div>
    );
  }
}
