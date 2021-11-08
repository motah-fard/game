import React from "react";
import { getAllGames } from "../services/index";
import { useEffect, useState } from "react";
import AllGames from "./AllGames";
import "./Game.css";

const Games = (props) => {
  const [games, setGames] = useState([]);
  const { id } = props.games;
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    getAllGames().then((fetchGame) => props.setGames(fetchGame));
    // console.log(id);//not sur ewhy this is undefined!!!// ask tomorrow
  }, [toggleFetch]);
  return (
    <div className="game">
      <h4>List of Words</h4>
      {props.games.map((game) => (
        <AllGames setToggleFetch={setToggleFetch} key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Games;
