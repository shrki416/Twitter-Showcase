import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import "./Random.css";

const Random = () => {
  const [user, setUser] = useState({
    username: "",
    image: ""
  });

  return (
    <>
      <div className="random-container">
        <Header />
        <h1 className="random-header">Random Tweet Page</h1>
        <p className="random-header-p">
          Click on the logo below to view a randomly selected tweet
        </p>
        <section></section>
      </div>
    </>
  );
};

export default Random;
