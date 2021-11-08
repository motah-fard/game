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
      {props.user ? (
        <>
          <Link to="/hangman">
            <button onClick={() => handleClick(id)}>Start a New Game</button>
          </Link>
          <Link to="/new/word">
            <button> Creating a Word</button>
          </Link>
          <Link to="/words">
            <button>List of the Words</button>
          </Link>
          <Link to="/games">
            <button>List of the Games</button>
          </Link>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Home;
