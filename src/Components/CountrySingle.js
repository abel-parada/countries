import React, { Component } from 'react';
import axios from 'axios';

function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}
  
  function getWeather(capital) {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`);
}

class CountrySingle extends Component {

    state ={
        country:[],
        weather:[],
        isLoading:true,
    };

    componentDidMount () {
        // console.log(this.props.params);
        Promise.all([getCountry(this.props.params.name), getWeather(this.props.params.name)])
            .then((response) => {
                this.setState({
                    country: response[0].data[0],
                    weather: response[1].data,
                    isLoading:false,
                });
                console.log("state country", this.state.country);
                console.log("state of weather", this.state.weather);
            });
    }

    render() {

        if(this.state.isLoading) {
            return (
              <div className="loading">
                <div className="loader"></div>
              </div>
            );
          }

        return (
            <div className="App">
                <div className="wrapper">
                    <div className="countries">
                        <div className="cardhead">
                            <h2>Wheater is {this.state.weather.main.temp} °C in {this.state.country.capital}</h2>
                            <img className="weathericon" src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`} alt={this.state.weather.weather[0].description}/>
                        </div>
                        <p><strong>Actual thermal Sensation: </strong>{this.state.weather.main.feels_like}°C</p>
                        <p><strong>Maximum temp for the day: </strong>{this.state.weather.main.temp_max}°C</p>
                        <p><strong>Minimum temp for the day: </strong>{this.state.weather.main.temp_min}°C</p>
                        <p><strong>Humidity: </strong>{this.state.weather.main.humidity}%</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountrySingle;