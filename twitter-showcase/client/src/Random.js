import React from 'react';
import Navbar from './Navbar';
import './Random.css';

const MLB = require('./assets/MLB.png')
const NHL = require('./assets/NHL.png')
const NFL = require('./assets/NFL.png')
const MLS = require('./assets/MLS.png')
const NBA = require('./assets/NBA.png')

function Random() {
  
  function handleClick(e) { alert(`${e.target.alt} was clicked!`) }

    return (
      <>
        <Navbar />
        <div className="random-container">
          <h1 className="random-header">Random Tweet Page</h1>
          <section className="random-section">
            <img
              onClick={handleClick}
              className="random-img"
              src={MLB}
              alt="MLB-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NHL}
              alt="NHL-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NBA}
              alt="NBA-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={MLS}
              alt="MLS-Logo"
            />
            <img
              onClick={handleClick}
              className="random-img"
              src={NFL}
              alt="NFL-Logo"
            />
          </section>
        </div>
      </>
    );
}

export default Random;