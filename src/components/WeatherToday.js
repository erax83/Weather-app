import React from "react";
import "./Weathercalls.css";

// This component renders the weather info of the current day.
export default class WeatherToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      laterShow: false,
    };

    this.toggleLater = this.toggleLater.bind(this);
  }

  // This method change the state laterShow. The value of this
  // state decide if the upcoming temperatures for the current day
  // is to be displayed or not.
  toggleLater() {
    if (this.state.laterShow === false) {
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

    // These variables store the temperatures. The reason for this is
    // so that the celsius sign will not be showed if there is no value to be fetched.
    // Only if you use the app early in the day all eight temperatures will be displayed.
    let tempOne =
      this.props.todaysTemperatures[0] !== undefined
        ? this.props.todaysTemperatures[0] + "°"
        : "";
    let tempTwo =
      this.props.todaysTemperatures[1] !== undefined
        ? this.props.todaysTemperatures[1] + "°"
        : "";
    let tempThree =
      this.props.todaysTemperatures[2] !== undefined
        ? this.props.todaysTemperatures[2] + "°"
        : "";
    let tempFour =
      this.props.todaysTemperatures[3] !== undefined
        ? this.props.todaysTemperatures[3] + "°"
        : "";
    let tempFive =
      this.props.todaysTemperatures[4] !== undefined
        ? this.props.todaysTemperatures[4] + "°"
        : "";
    let tempSix =
      this.props.todaysTemperatures[5] !== undefined
        ? this.props.todaysTemperatures[5] + "°"
        : "";
    let tempSeven =
      this.props.todaysTemperatures[6] !== undefined
        ? this.props.todaysTemperatures[6] + "°"
        : "";
    let tempEight =
      this.props.todaysTemperatures[7] !== undefined
        ? this.props.todaysTemperatures[7] + "°"
        : "";

    // laterToday contain timestamps and temperatures for the rest of the current day.
    if (laterShowNow === true) {
      laterToday = (
        <div>
          <h3> {this.props.todaysTimestamps[0]} </h3>
          <p>{tempOne}</p>
          <h3>{this.props.todaysTimestamps[1]}</h3>
          <p>{tempTwo}</p>
          <h3>{this.props.todaysTimestamps[2]}</h3>
          <p>{tempThree}</p>
          <h3>{this.props.todaysTimestamps[3]}</h3>
          <p>{tempFour}</p>
          <h3>{this.props.todaysTimestamps[4]}</h3>
          <p>{tempFive}</p>
          <h3>{this.props.todaysTimestamps[5]}</h3>
          <p>{tempSix}</p>
          <h3>{this.props.todaysTimestamps[6]}</h3>
          <p>{tempSeven}</p>
          <h3>{this.props.todaysTimestamps[7]}</h3>
          <p>{tempEight}</p>
        </div>
      );
    }

    return (
      // Todays weather information is here displayed with props from the
      // Weathercalls component.
      //If the button is clicked the days future temeratures are displayed from
      // laterToday.
      <div id="todayId">
        <div>
          <h3>Location</h3>
          <p>{this.props.place}</p>
          <h3>Wind Speed</h3>
          <p>{this.props.windSpeed} meter/sec</p>
          <h3>Humidity</h3>
          <p>{this.props.humidity}%</p>
          <h3>Sunrise</h3>
          <p>{this.props.sunrise}</p>
          <h3>Sunset</h3>
          <p>{this.props.sunset}</p>
        </div>
        <div>
          <h3>Temperature</h3>
          <h1>{this.props.temperature}°</h1>
          <button onClick={this.toggleLater}>
            <h3>Later Today</h3>
          </button>
          {laterToday}
        </div>
      </div>
    );
  }
}
