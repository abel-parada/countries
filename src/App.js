import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import number from 'easy-number-formatter';

class App extends Component {

  state={
    data:[],
    searchInput:"",
    isLoading: true,
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v2/all?fields=name,capital,flags,languages,currencies,population').then( response =>{
      this.setState({data: response.data , isLoading: false});
      console.log(this.state.data);
    });
  };

  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
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
        <div className="bg">
          <h1>THE WORLD IS YOUR OYSTER!</h1>
          <input type="text" name="search" placeholder="Search for a country here" onChange={this.searchHandler}></input>
          <div className="wrapper">
            {this.state.data.filter((country)=>{
              return country.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
            }).map((country, i) =>(
              <div className="countries" key={i}>
                <div className="cardhead">
                <h2>{country.name}</h2>
                <h3>{country.capital}</h3>
                </div>
                <img src={country.flags.png} alt={country.name}/>

                <p>
                  <strong>Languages</strong>: {country.languages.map((languages,j) => (
                  <span key={j}>{languages.name} </span>
                  ))}
                </p>

                <p>
                  <strong>Currencies</strong>: {country.currencies.map((currencies, k) => (
                  <span key={k}>{currencies.name} - {currencies.symbol}</span>
                  ))}
                  </p>

                <p>
                  <strong>Population</strong>: {number.formatNumber(country.population)}</p>
                
                </div>
            ))}
          </div>
        </div>
    </div>
    );
  }
}

export default App;
