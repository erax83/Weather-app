import React from "react";
import WeatherToday from "./WeatherToday";



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

    let responseArr = [];
    for (let i = 0; i < response.list.length; i++) {
      responseArr[i] = response.list[i].main.temp;
    }

    this.setState(prevState => {
      let temperatureTest = Object.assign({}, prevState.temperatureTest);
      /*
      temperatureTest.dayOne = response.list[0].main.temp;
      temperatureTest.dayTwo = response.list[1].main.temp;
      */
      temperatureTest.dayOne = responseArr[0];
      temperatureTest.dayTwo = responseArr[1];
      
      return { temperatureTest };
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
      temperatureTest: {
          dayOne: null,
          dayTwo: null,
      }
    };
    this.getCoordinates = this.getCoordinates.bind(this);
    this.getCoordinatesTwo = this.getCoordinatesTwo.bind(this);

    this.getCoordinates();
    //this.getWeather();
  }

  componentDidMount() {
    console.log("did mount");
    //this.getCoordinates();
    //this.getWeather();
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
          <h3>TemperatureTest</h3>
          <p>{this.state.temperatureTest.dayOne}</p> 
          <p>{this.state.temperatureTest.dayTwo}</p> 
        </main>
        <WeatherToday
        testOne={this.state.temperatureTest.dayOne}
        testTwo={this.state.temperatureTest.dayTwo}
        ></WeatherToday>
      </div>
    );
  }
}
