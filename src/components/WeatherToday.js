import React from "react";
import "./Weathercalls.css";

export default class WeatherToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laterShow: false,
    };

    this.toggleLater = this.toggleLater.bind(this);
  }

  toggleLater() {
    if (this.state.laterShow == false) {
      this.setState({
        laterShow: true,
      });
    } else {
      this.setState({
        laterShow: false,
      });
    }
  }

  render() {
    let laterToday = null;
    let laterShowNow = this.state.laterShow;

    let tempOne =
      this.props.todaysTemperatures[0] !== undefined
        ? this.props.todaysTemperatures[0] + "°"
        : '';
    let tempTwo =
      this.props.todaysTemperatures[1] !== undefined
        ? this.props.todaysTemperatures[1] + "°"
        : '';
    let tempThree =
      this.props.todaysTemperatures[2] !== undefined
        ? this.props.todaysTemperatures[2] + "°"
        : '';
    let tempFour =
      this.props.todaysTemperatures[3] !== undefined
        ? this.props.todaysTemperatures[3] + "°"
        : '';
    let tempFive =
      this.props.todaysTemperatures[4] !== undefined
        ? this.props.todaysTemperatures[4] + "°"
        : '';
    let tempSix =
      this.props.todaysTemperatures[5] !== undefined
        ? this.props.todaysTemperatures[5] + "°"
        : '';
    let tempSeven =
      this.props.todaysTemperatures[6] !== undefined
        ? this.props.todaysTemperatures[6] + "°"
        : '';
    let tempEight =
      this.props.todaysTemperatures[7] !== undefined
        ? this.props.todaysTemperatures[7] + "°"
        : '';

    if (laterShowNow == true) {
      laterToday = (
        <div>
          <p> {this.props.todaysTimestamps[0]} </p>
          <p>{tempOne}</p>
          <p>{this.props.todaysTimestamps[1]}</p>
          <p>{tempTwo}</p>
          <p>{this.props.todaysTimestamps[2]}</p>
          <p>{tempThree}</p>
          <p>{this.props.todaysTimestamps[3]}</p>
          <p>{tempFour}</p>
          <p>{this.props.todaysTimestamps[4]}</p>
          <p>{tempFive}</p>
          <p>{this.props.todaysTimestamps[5]}</p>
          <p>{tempSix}</p>
          <p>{this.props.todaysTimestamps[6]}</p>
          <p>{tempSeven}</p>
          <p>{this.props.todaysTimestamps[7]}</p>
          <p>{tempEight}</p>
        </div>
      );

    }
    /*
    let antal = [];
    antal = this.props.todaysTemperatures;
    let antalTwo = antal.length;
    console.log(antalTwo);
    */

    return (
      <div id="todayId">
        <h3>Location</h3>
        <p>{this.props.place}</p>
        <h3>Temperature</h3>
        <h1>{this.props.temperature}°</h1>
        <button onClick={this.toggleLater}><h3>Later Today</h3></button>
        {laterToday}
        <h3>Wind Speed</h3>
        <p>{this.props.windSpeed} meter/sec</p>
        <h3>Humidity</h3>
        <p>{this.props.humidity}%</p>
        <h3>Sunrise</h3>
        <p>{this.props.sunrise}</p>
        <h3>Sunset</h3>
        <p>{this.props.sunset}</p>
      </div>
    );
  }
}
