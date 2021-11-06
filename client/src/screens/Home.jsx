import LandingPage from "./LandingPage";
import React from "react";
import Test from "./Test";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <section>
      <Test/>
      <Link>
      <button> Play a New Game</button>
      <button> Adding a Word</button>
      </Link>
      
    </section>
  );
};

export default Home;