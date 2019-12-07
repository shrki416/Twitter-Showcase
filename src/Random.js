import React from 'react';
import Navbar from './Navbar';
import './Random.css';

function Random() {
    return (
      <>
        <Navbar />
        <h1 className="random-header">Random Tweet Page</h1>
        <section className="random-container">
          <input type="text" className="search-input" placeholder="Search"/> 
          <br />
          <button className="btn btn-user" type="submit">Search By User</button>
          <button className="btn btn-handle" type="submit">Search By Twitter Handle</button>
        </section>
      </>
    );
}

export default Random;
