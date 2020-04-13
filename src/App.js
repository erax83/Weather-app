import React from "react";
import "./App.css";


/*
  const weatherApi = {
  apiUrl: 'https://api.openweathermap.org/data/2.5/',
  apiKey: '8ab41d8883881d150eed8cb9119dcb3b',
  }
  */

export default class App extends React.Component {

  getCoordinates() {
    console.log('get cordinates');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinatesTwo);
    }else {
      console.log('bla bla error');
    }
    
    /*
     navigator.geolocation.getCurrentPosition(function(position){
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
    */
    
    
  }

  getCoordinatesTwo(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    console.log(this.state.latitude);
    this.getWeather();
  }


  getWeather = async () => {
    console.log('get weather');
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

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temperature: '',
      windSpeed: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      latitude: null,
      longitude: null,
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
        <header>
          <h1>Weather Report</h1>
          
        </header>

        <main>
          <h2>City</h2>
          <p>{this.state.city}</p>
          <h2>Temperature</h2>
          <p>{this.state.temperature}</p>
          <h2>Wind Speed</h2>
          <p>{this.state.windSpeed}</p>
          <h2>Humidity</h2>
          <p>{this.state.humidity}</p>
          <h2>Sunrise</h2>
          <p>{this.state.sunrise}</p>
          <h2>Sunset</h2>
          <p>{this.state.sunset}</p>
        </main>
      </div>
    );
  }
}

