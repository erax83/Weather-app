import React from "react";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";

export default class Weathercalls extends React.Component {
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

    this.setState({
      city: response.name,
      temperature: response.main.temp,
      windSpeed: response.wind.speed,
      humidity: response.main.humidity,
      sunrise: response.sys.sunrise,
      sunset: response.sys.sunset,
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
    let todayCount = 0;
    let responseArrForecast = [];
    let responseArrForecastDate = [];
    let forecastCount = 0;

    for (let i = 0; i < response.list.length; i++) {
      if (response.list[i].dt_txt.slice(8, 10) == today) {
        responseArrToday[todayCount] = response.list[i].main.temp;
        todayCount++;
      } else {
        responseArrForecast[forecastCount] = response.list[i].main.temp;
        responseArrForecastDate[forecastCount] = response.list[i].dt_txt;
        forecastCount++;
      }
    }

    this.setState((prevState) => {
      let todaysTemperatures = Object.assign({}, prevState.todaysTemperatures);

      //todaysTemperatures[0] = responseArrToday[0];
      for(let i = 0; i < responseArrToday.length; i++) {
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
      forecastDates.dayFive = responseArrForecastDate[32];

      return { forecastDates };
    });

    this.setState((prevState) => {
      let forecastTemperature = Object.assign(
        {},
        prevState.forecastTemperature
      );

      forecastTemperature.oneZero = responseArrForecast[0];
      forecastTemperature.oneThree = responseArrForecast[1];
      forecastTemperature.oneSix = responseArrForecast[2];
      forecastTemperature.oneNine = responseArrForecast[3];
      forecastTemperature.oneTwelve = responseArrForecast[4];
      forecastTemperature.oneFifteen = responseArrForecast[5];
      forecastTemperature.oneEighteen = responseArrForecast[6];
      forecastTemperature.oneTwenyone = responseArrForecast[7];

      forecastTemperature.twoZero = responseArrForecast[8];
      forecastTemperature.twoThree = responseArrForecast[9];
      forecastTemperature.twoSix = responseArrForecast[10];
      forecastTemperature.twoNine = responseArrForecast[11];
      forecastTemperature.twoTwelve = responseArrForecast[12];
      forecastTemperature.twoFifteen = responseArrForecast[13];
      forecastTemperature.twoEighteen = responseArrForecast[14];
      forecastTemperature.twoTwenyone = responseArrForecast[15];

      forecastTemperature.threeZero = responseArrForecast[16];
      forecastTemperature.threeThree = responseArrForecast[17];
      forecastTemperature.threeSix = responseArrForecast[18];
      forecastTemperature.threeNine = responseArrForecast[19];
      forecastTemperature.threeTwelve = responseArrForecast[20];
      forecastTemperature.threeFifteen = responseArrForecast[21];
      forecastTemperature.threeEighteen = responseArrForecast[22];
      forecastTemperature.threeTwenyone = responseArrForecast[23];

      forecastTemperature.fourZero = responseArrForecast[24];
      forecastTemperature.fourThree = responseArrForecast[25];
      forecastTemperature.fourSix = responseArrForecast[26];
      forecastTemperature.fourNine = responseArrForecast[27];
      forecastTemperature.fourTwelve = responseArrForecast[28];
      forecastTemperature.fourFifteen = responseArrForecast[29];
      forecastTemperature.fourEighteen = responseArrForecast[30];
      forecastTemperature.fourTwenyone = responseArrForecast[31];

      forecastTemperature.fiveZero = responseArrForecast[32];
      forecastTemperature.fiveThree = responseArrForecast[33];
      forecastTemperature.fiveSix = responseArrForecast[34];
      forecastTemperature.fiveNine = responseArrForecast[35];
      forecastTemperature.fiveTwelve = responseArrForecast[36];
      forecastTemperature.fiveFifteen = responseArrForecast[37];
      forecastTemperature.fiveEighteen = responseArrForecast[38];
      forecastTemperature.fiveTwenyone = responseArrForecast[39];

      return { forecastTemperature };
    });

  };

  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temperature: "",
      windSpeed: "",
      humidity: "",
      sunrise: "",
      sunset: "",
      latitude: null,
      longitude: null,

      todaysTemperatures: {},

      forecastTemperature: {
        oneZero: null,
        oneThree: null,
        oneSix: null,
        oneNine: null,
        oneTwelve: null,
        oneFifteen: null,
        oneEighteen: null,
        oneTwenyone: null,

        twoZero: null,
        twoThree: null,
        twoSix: null,
        twoNine: null,
        twoTwelve: null,
        twoFifteen: null,
        twoEighteen: null,
        twoTwenyone: null,

        threeZero: null,
        threeThree: null,
        threeSix: null,
        threeNine: null,
        threeTwelve: null,
        threeFifteen: null,
        threeEighteen: null,
        threeTwenyone: null,

        fourZero: null,
        fourThree: null,
        fourSix: null,
        fourNine: null,
        fourTwelve: null,
        fourFifteen: null,
        fourEighteen: null,
        fourTwenyone: null,

        fiveZero: null,
        fiveThree: null,
        fiveSix: null,
        fiveNine: null,
        fiveTwelve: null,
        fiveFifteen: null,
        fiveEighteen: null,
        fiveTwenyone: null,
      },

      forecastDates: {
        dayOne: "",
        dayTwo: "",
        dayThree: "",
        dayFour: "",
        dayFive: "",
      },

    };
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getCoordinatesTwo = this.getCoordinatesTwo.bind(this);

    this.getCoordinates();
  }

  componentDidMount() {
    console.log("did mount");
  }

  render() {

    return (
      <div>
        <main>
          <h3>City</h3>
          <p>{this.state.city}</p>
          <h3>Temperature</h3>
          <p>{this.state.temperature}</p>
          <h3>Wind Speed</h3>
          <p>{this.state.windSpeed}</p>
          <h3>Humidity</h3>
          <p>{this.state.humidity}</p>
          <h3>Sunrise</h3>
          <p>{this.state.sunrise}</p>
          <h3>Sunset</h3>
          <p>{this.state.sunset}</p>
          <h3>Forecast Temerature</h3>
          <p>{this.state.forecastDates.dayOne}</p>
          <p>{this.state.forecastTemperature.oneZero}</p>
          <p>{this.state.forecastTemperature.oneThree}</p>
          <h3>Todays temperature</h3>
          <p>{this.state.todaysTemperatures[0]}</p>
          <p>{this.state.todaysTemperatures[1]}</p>
        </main>
        <WeatherToday
          testOne={this.state.todaysTemperatures[0]}
        ></WeatherToday>
        <WeatherForecast
          testOne={this.state.forecastTemperature.oneZero}
        ></WeatherForecast>
      </div>
    );
  }
}
