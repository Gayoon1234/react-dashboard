import React from 'react';
import "../styles/HomePage.css"
import "./Clock"
import Clock from './Clock';
import Quotes from './Quotes';
import image from '../imgs/Turrent.png'

function HomePage() {
  return (
    <div className="container">
      <div className="ImageBox Box">
        <img className='image' src={image}></img>
      </div>
      <div className="ClockBox Box">
        <Clock></Clock>
      </div>
      <div className="QuoteBox Box">
        <Quotes></Quotes>
      </div>
      <div className="WeatherBox Box">
        <p>Hello</p>
      </div>
      <div className="TaskBox Box">
        <p>Hello</p>
      </div>
      <div className="MusicBox Box">
        <p>Hello</p>
      </div>
      <div className="TBDBox Box">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default HomePage;