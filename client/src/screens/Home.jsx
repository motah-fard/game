import LandingPage from "./LandingPage";
import React from "react";
import Test from "./Test";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addGame } from "../services";
const Home = (props) => {
  const [game, setGame] = useState([]);
  const handleClick = async (wordId) => {
    const game = await addGame(wordId);
    setGame(game);
    console.log(game);
  };
  const { id } = props.myWord;
  return (
    <section>
      <Test />
      <Link to="/hangman">
        <button onClick={() => handleClick(id)}>make the game</button>
      </Link>
      <Link to="/new/word">
        <button> Adding a Word</button>
      </Link>
    </section>
  );
};

export default Home;
