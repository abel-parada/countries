import React, { Component } from 'react';
import axios from 'axios';
import CountryCard from './CountryCard';
import '../App.css';


class CountriesList extends Component {

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
              <h1>THE WORLD IS YOUR OYSTER!</h1>
              <input type="text" name="search" placeholder="Search for a country here" onChange={this.searchHandler}></input>
              <div className="wrapper">
                {this.state.data.filter((country)=>{
                  return country.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
                }).map((country) =>(
                  <CountryCard {...country} key={country.name}/>
                ))}
              </div>
            </div>
          );
    }
}

export default CountriesList;