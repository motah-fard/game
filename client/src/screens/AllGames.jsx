import { deleteGame } from "../services";
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const AllGames = (props) => {
  const ID = props.game.id;

  const handelDelete = async () => {
    await deleteGame(ID);
    props.setToggleFetch((curr) => !curr);
  };
  return (
    <div>
      <h5>{props.game.word.text}</h5>
      <h6>{props.game.win_lose.toString()}</h6>
      <RiCloseCircleLine
        className="delete-icon"
        onClick={handelDelete}
        size="35px"
      />
    </div>
  );
};

export default AllGames;
