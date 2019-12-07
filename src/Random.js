import React from 'react';
import Navbar from './Navbar';
import './Random.css';

const MLB = require('./assets/MLB.png')
const NHL = require('./assets/NHL.png')
const NFL = require('./assets/NFL.png')
const MLS = require('./assets/MLS.png')
const NBA = require('./assets/NBA.png')

function Random() {
    return (
      <>
        <Navbar />
        <h1 className="random-header">Random Tweet Page</h1>
        <section className="random-container">
          <img 
            onClick={() => alert('clicked!')} 
            className="random-img" src={MLB} alt="MLB logo" />
          <img className="random-img" src={NHL} alt="NHL logo" />
          <img className="random-img" src={NBA} alt="NBA logo" />
          <img className="random-img" src={MLS} alt="MLS lgoo" />
          <img className="random-img" src={NFL} alt="NFL logo" />
        </section>
      </>
    );
}

export default Random;
