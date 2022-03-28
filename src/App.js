import logo from './logo.svg';
import './App.css';
import "./index.css" 
import { useState } from 'react';


import Background from "./Components/Background/Background"
import Search from "./Components/Search/Search"
import Result from "./Components/Result/Result"


function App() {
  const [weather, setWeather]=useState({});
  return (
    <section className="Weather-App">
    <Background backgrounds={weather.weather && weather.weather[0].main}/> 
    <div id="title">Weather App</div>
   
    <Search setWeather={setWeather}/>
    <Result air={weather}/>
    </section>
  );
}

export default App;
