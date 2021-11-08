import { useEffect, useState } from "react";
import { deleteGame, getAllGames } from "../services";
import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri';

const AllGames = (props) => {
 
  const ID = props.game.id;

  const handelDelete = async () => {
    await deleteGame(ID);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div>
      {/* <h5>{game.word.text}</h5> */}
      <RiCloseCircleLine
        className="delete-icon"
        onClick={handelDelete}
        size="35px"
      />
    </div>
  );
};

export default AllGames;
