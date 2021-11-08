import React from "react";
import { getAllGames } from "../services/index";
import { useEffect, useState } from "react";
import AllGames from "./AllGames";

const Games = (props) => {
  // const [games, setGames] = useState([]);
  const { id } = props.games;
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    getAllGames().then((fetchGame) => props.setGames(fetchGame));
    // console.log(id);//not sur ewhy this is undefined!!!// ask tomorrow
  }, [toggleFetch]);
  return (
    <div>
      <h1>Hello {props.user.username}!</h1>
      {props.games.map((game) => (
        <AllGames setToggleFetch={setToggleFetch} key={game.id} game={game} />
      ))}
    </div>
  );
};

export default Games;
