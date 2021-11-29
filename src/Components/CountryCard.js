import React from 'react';
import { FaLanguage } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import number from 'easy-number-formatter';
import '../App.css';
import {Link} from 'react-router-dom';



const CountryCard = ({name, capital,languages,currencies,population,flags}) => {
    return (
        <Link to={capital}>
            <div className="">
                <div className="countries" key={name}>

                        <div className="cardhead">
                        <h2>{name}</h2>
                        <h3>{capital}</h3>
                        </div>
                        <img src={flags.png} alt={name}/>
        
                        <p>
                        <strong><FaLanguage /> Languages</strong>: {languages.map((languages,j) => (
                        <span key={j}>{languages.name}</span>
                        ))}
                        </p>
        
                        <p>
                        <strong><FaRegMoneyBillAlt /> Currencies</strong>: {currencies.map((currencies, k) => (
                        <span key={k}>{currencies.name} - {currencies.symbol}</span>
                        ))}
                        </p>
        
                        <p>
                        <strong><FaUsers /> Population</strong>: {number.formatNumber(population)}
                        </p>

                        </div>
            </div>
        </Link>
    );
};

export default CountryCard;
