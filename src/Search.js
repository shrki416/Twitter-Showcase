import React from 'react'
import { Link } from 'react-router-dom'
import "./Search.css";

function Search() {
    return (
        <div>
            <h1>User Search Page</h1>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Search
