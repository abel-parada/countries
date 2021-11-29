import React from 'react';
import './App.css';
import CountriesList from './Components/CountriesList';
import Home from './Components/Home';
import {BrowserRouter, Route, Link, Routes, useParams} from 'react-router-dom';
import CountrySingle from './Components/CountrySingle';

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params}{...props}/>
};


const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/countries" element={<CountriesList />}/>
        <Route path="/countries/:name" element={<RouteWrapper/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;