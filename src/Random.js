import React from 'react';
import Navbar from './Navbar';
import './Random.css';

function Random() {
    return (
      <>
        <Navbar />
        <section className="random-container">
          <h1 className="random-header">Random Tweet Page</h1>
        </section>
      </>
    );
}

export default Random;
