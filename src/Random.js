import React from 'react';
import { Link } from 'react-router-dom';
import './Random.css';

function Random() {
    return (
      <div>
        <h1>Random Tweet Page</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    );
}

export default Random;
