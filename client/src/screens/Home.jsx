import LandingPage from "./LandingPage";
import React from "react";
import Test from "./Test";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addGame } from "../services";
import {FaGamepad, FaThList, FaAngellist} from 'react-icons/fa'
import {BsFillFileWordFill} from 'react-icons/bs'
import './Home.css'
const Home = (props) => {
  const [game, setGame] = useState([]);
  const handleClick = async (wordId) => {
    const game = await addGame(wordId);
    setGame(game);
    console.log(game);
  };
  const { id } = props.myWord;
  return (
    <section className='hangman'>
      <div className='hangman'>
      {props.user ? (
        <>
        <div>
          <Link to="/hangman">
            <FaGamepad onClick={() => handleClick(id)} className="edit-icon" size="55px"/>
          </Link>
  
          <Link to="/games">
            <FaAngellist className="edit-icon" size="55px"/>
          </Link>
   
          <Link to="/new/word">
            <BsFillFileWordFill className="edit-icon" size="55px"/>
          </Link>

          <Link to="/words">
            <FaThList className="edit-icon" size="55px"/>
          </Link>
          </div>
        </>
        
      ) : (
        <></>
      )}
      <Test />

      </div>
    </section>
  );
};

export default Home;
