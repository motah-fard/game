import LandingPage from "./LandingPage";
import React from "react";
import Test from "./Test";
import { Link } from "react-router-dom";
const Home = (props) => {
// creating game to add to the data base
// making the game
// const handleClick = async (wordId) => {
//   const user = await addGame(wordId);
//   // props.setUser(user);
//   // console.log(props.user.username);
// }
  return (
    <section>
      <Test/>
      <Link to="/hangman">
        {/* <button onClick={() => handleClick(p.id)}>make the game</button> */}
      </Link>
      <Link to="/new/word">
        <button> Adding a Word</button>
      </Link>
    </section>
  );
};

export default Home;