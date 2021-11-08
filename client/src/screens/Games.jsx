import React from 'react';
import { deleteGame, getAllGames, getGameById } from "../services/index";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import AllGames from './AllGames';

const Games = (props) => {
    const [games, setGames] = useState([]);
    const [ toggleFetch, setToggleFetch ] = useState(false)
    useEffect(() => {
        getAllGames().then((fetchGame) => setGames(fetchGame));
      }, []);
    return (
        <div>
            <h1>Hello {props.user.username}!</h1>
            {games.map((game) => (
                <AllGames setToggleFetch={setToggleFetch} key={game.id} games={game}/>
            ))}
        </div>
    );
};

export default Games;