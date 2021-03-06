import React from "react";
import "./Weathercalls.css";

// This component renders four buttons that are marked with the dates for the upcoming days.
// Each button makes a call to a seperate togglemethod. These methods change the
// value of the state show. Depending on which value this state has, different blocks of
// code (corresponding to the selected date) are then displayed with the swich case
// in the render block.
export default class WeatherForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };

    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
    this.toggleFour = this.toggleFour.bind(this);
  }

  toggleOne() {
    if (this.state.show === 1) {
      this.setState({
        show: "",
      });
    } else {
      this.setState({
        show: 1,
      });
    }
  }

  toggleTwo() {
    if (this.state.show === 2) {
      this.setState({
        show: "",
      });
    } else {
      this.setState({
        show: 2,
      });
    }
  }

  toggleThree() {
    if (this.state.show === 3) {
      this.setState({
        show: "",
      });
    } else {
      this.setState({
        show: 3,
      });
    }
  }

  toggleFour() {
    if (this.state.show === 4) {
      this.setState({
        show: "",
      });
    } else {
      this.setState({
        show: 4,
      });
    }
  }

  render() {
    let content = null;
    let showNow = this.state.show;

    switch (showNow) {
      case 1:
        content = (
          <div>
            <h2>{this.props.dayOne}</h2>
            <h3>00.00</h3>
            <p>{this.props.temperatureForecastArr[0]}°</p>
            <h3>03.00</h3>
            <p>{this.props.temperatureForecastArr[1]}°</p>
            <h3>06.00</h3>
            <p>{this.props.temperatureForecastArr[2]}°</p>
            <h3>09.00</h3>
            <p>{this.props.temperatureForecastArr[3]}°</p>
            <h3>12.00</h3>
            <p>{this.props.temperatureForecastArr[4]}°</p>
            <h3>15.00</h3>
            <p>{this.props.temperatureForecastArr[5]}°</p>
            <h3>18.00</h3>
            <p>{this.props.temperatureForecastArr[6]}°</p>
            <h3>21.00</h3>
            <p>{this.props.temperatureForecastArr[7]}°</p>
          </div>
        );
        break;
      case 2:
        content = (
          <div>
            <h2>{this.props.dayTwo}</h2>
            <h3>00.00</h3>
            <p>{this.props.temperatureForecastArr[8]}°</p>
            <h3>03.00</h3>
            <p>{this.props.temperatureForecastArr[9]}°</p>
            <h3>06.00</h3>
            <p>{this.props.temperatureForecastArr[10]}°</p>
            <h3>09.00</h3>
            <p>{this.props.temperatureForecastArr[11]}°</p>
            <h3>12.00</h3>
            <p>{this.props.temperatureForecastArr[12]}°</p>
            <h3>15.00</h3>
            <p>{this.props.temperatureForecastArr[13]}°</p>
            <h3>18.00</h3>
            <p>{this.props.temperatureForecastArr[14]}°</p>
            <h3>21.00</h3>
            <p>{this.props.temperatureForecastArr[15]}°</p>
          </div>
        );
        break;
      case 3:
        content = (
          <div>
            <h2>{this.props.dayThree}</h2>
            <h3>00.00</h3>
            <p>{this.props.temperatureForecastArr[16]}°</p>
            <h3>03.00</h3>
            <p>{this.props.temperatureForecastArr[17]}°</p>
            <h3>06.00</h3>
            <p>{this.props.temperatureForecastArr[18]}°</p>
            <h3>09.00</h3>
            <p>{this.props.temperatureForecastArr[19]}°</p>
            <h3>12.00</h3>
            <p>{this.props.temperatureForecastArr[20]}°</p>
            <h3>15.00</h3>
            <p>{this.props.temperatureForecastArr[21]}°</p>
            <h3>18.00</h3>
            <p>{this.props.temperatureForecastArr[22]}°</p>
            <h3>21.00</h3>
            <p>{this.props.temperatureForecastArr[23]}°</p>
          </div>
        );
        break;
      case 4:
        content = (
          <div>
            <h2>{this.props.dayFour}</h2>
            <h3>00.00</h3>
            <p>{this.props.temperatureForecastArr[24]}°</p>
            <h3>03.00</h3>
            <p>{this.props.temperatureForecastArr[25]}°</p>
            <h3>06.00</h3>
            <p>{this.props.temperatureForecastArr[26]}°</p>
            <h3>09.00</h3>
            <p>{this.props.temperatureForecastArr[27]}°</p>
            <h3>12.00</h3>
            <p>{this.props.temperatureForecastArr[28]}°</p>
            <h3>15.00</h3>
            <p>{this.props.temperatureForecastArr[29]}°</p>
            <h3>18.00</h3>
            <p>{this.props.temperatureForecastArr[30]}°</p>
            <h3>21.00</h3>
            <p>{this.props.temperatureForecastArr[31]}°</p>
          </div>
        );
        break;

      default:
        content = "";
    }

    return (
      <div id="forecastId">
        <div>
          <h2>Temperature Forecast</h2>
          <button onClick={this.toggleOne}>
            {" "}
            <h3>{this.props.dayOne}</h3>
          </button>
          <br></br>
          <button onClick={this.toggleTwo}>
            <h3>{this.props.dayTwo}</h3>
          </button>
          <br></br>
          <button onClick={this.toggleThree}>
            <h3>{this.props.dayThree}</h3>
          </button>
          <br></br>
          <button onClick={this.toggleFour}>
            <h3>{this.props.dayFour}</h3>
          </button>
          <br></br>
        </div>
        <div id="forecastContent">{content}</div>
      </div>
    );
  }
}
