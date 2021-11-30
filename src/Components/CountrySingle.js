import React, { Component } from 'react';
import axios from 'axios';

function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}
  
  function getWeather(capital) {
    return axios.get(`api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`);
}

class CountrySingle extends Component {

    state ={
        country:[],
        weather:[],
    };

    componentDidMount () {
        console.log(this.props.params);
    }

    render() {
        return (
            <div className="App">
                Right now it is degrees C in{this.props.params.name}
            </div>
        );
    }
}

export default CountrySingle;