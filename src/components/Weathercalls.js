import React from "react";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";
import "./Weathercalls.css";

export default class Weathercalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "",
      temperature: "",
      windSpeed: "",
      humidity: "",
      sunrise: "",
      sunset: "",
      latitude: null,
      longitude: null,

      todaysTimestamps: {},
      todaysTemperatures: {},

      forecastTemperature: {},

      forecastDates: {
        dayOne: "",
        dayTwo: "",
        dayThree: "",
        dayFour: "",
      },
    };
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getCoordinatesTwo = this.getCoordinatesTwo.bind(this);

    this.getCoordinates();
  }

  getCoordinates() {
    console.log("get cordinates");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinatesTwo);
    } else {
      console.log("Error. Could not use geolocation");
    }
  }

  getCoordinatesTwo(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    console.log(this.state.latitude);
    console.log(this.state.longitude);
    this.getWeather();
    this.getForecastWeather();
  }

  getWeather = async () => {
    console.log("get weather");
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=8ab41d8883881d150eed8cb9119dcb3b`
    );
    const response = await api_call.json();

    let kelvinToCelcius = Math.round(response.main.temp - 273.15);

    let secRise = response.sys.sunrise;
    let dateRise = new Date(secRise * 1000);
    let timeRise = dateRise.toLocaleTimeString();

    let secSet = response.sys.sunset;
    let dateSet = new Date(secSet * 1000);
    let timeSet = dateSet.toLocaleTimeString();

    this.setState({
      place: response.name,
      temperature: kelvinToCelcius,
      windSpeed: response.wind.speed,
      humidity: response.main.humidity,
      sunrise: timeRise,
      sunset: timeSet,
    });
  };

  getForecastWeather = async () => {
    console.log("get forecast");
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=8ab41d8883881d150eed8cb9119dcb3b`
    );
    const response = await api_call.json();

    let today = new Date().toDateString().slice(8, 10);

    let responseArrToday = [];
    let responseArrTodayTime = [];
    let todayCount = 0;
    let responseArrForecast = [];
    let responseArrForecastDate = [];
    let forecastCount = 0;

    for (let i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.slice(8, 10) === today) {
        responseArrToday[todayCount] = Math.round(response.list[i].main.temp - 273.15);
        responseArrTodayTime[todayCount] = response.list[i].dt_txt.slice(
          11,
          19
        );
        todayCount++;
      } else {
        responseArrForecast[forecastCount] = Math.round(response.list[i].main.temp - 273.15);
        responseArrForecastDate[forecastCount] = response.list[i].dt_txt.slice(
          0,
          10
        );
        forecastCount++;
      }
    }

    this.setState((prevState) => {
      let todaysTimestamps = Object.assign({}, prevState.todaysTimestamps);
      for (let i = 0; i < responseArrTodayTime.length; i++) {
        todaysTimestamps[i] = responseArrTodayTime[i];
      }
      return { todaysTimestamps };
    });

    this.setState((prevState) => {
      let todaysTemperatures = Object.assign({}, prevState.todaysTemperatures);
      for (let i = 0; i < responseArrToday.length; i++) {
        todaysTemperatures[i] = responseArrToday[i];
      }
      return { todaysTemperatures };
    });

    this.setState((prevState) => {
      let forecastDates = Object.assign({}, prevState.forecastDates);

      forecastDates.dayOne = responseArrForecastDate[0];
      forecastDates.dayTwo = responseArrForecastDate[8];
      forecastDates.dayThree = responseArrForecastDate[16];
      forecastDates.dayFour = responseArrForecastDate[24];

      return { forecastDates };
    });

    this.setState((prevState) => {
      let forecastTemperature = Object.assign(
        {},
        prevState.forecastTemperature
      );

      for (let i = 0; i < 32; i++) {
        forecastTemperature[i] = responseArrForecast[i];
      }

      return { forecastTemperature };
    });
  };

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    let temperatureForecastArr = [];
    temperatureForecastArr = this.state.forecastTemperature;

    let todaysTimestampsArr = [];
    todaysTimestampsArr = this.state.todaysTimestamps;

    let todaysTemperaturesArr = [];
    todaysTemperaturesArr = this.state.todaysTemperatures;

    return (
      <div>
        
        <main>
          <WeatherToday
            place={this.state.place}
            temperature={this.state.temperature}
            windSpeed={this.state.windSpeed}
            humidity={this.state.humidity}
            sunrise={this.state.sunrise}
            sunset={this.state.sunset}
            todaysTimestamps={todaysTimestampsArr}
            todaysTemperatures={todaysTemperaturesArr}
          ></WeatherToday>
          <WeatherForecast
            dayOne={this.state.forecastDates.dayOne}
            dayTwo={this.state.forecastDates.dayTwo}
            dayThree={this.state.forecastDates.dayThree}
            dayFour={this.state.forecastDates.dayFour}
            temperatureForecastArr={temperatureForecastArr}
          ></WeatherForecast>
        </main>
      </div>
    );
  }
}
