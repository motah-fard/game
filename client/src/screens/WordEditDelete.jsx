import { TiEdit } from "react-icons/ti";
import React from "react";
import { Link } from "react-router-dom";

const WordEditDelete = (props) => {
  const ID = props.word.id;

  return (
    <div className='icons'>
      <div className="word-row">
      <h5>{props.word.text.toUpperCase()}</h5>
      <div className="buttons">
      <Link to={`/edit-word/${ID}`}>
        <TiEdit className="edit-icon" size="35px" />
      </Link>
    </div>
    </div>
    </div>
  );
};

export default WordEditDelete;
