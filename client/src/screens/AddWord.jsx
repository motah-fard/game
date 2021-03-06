import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createWord, updateWord, getWordsById } from "../services";
import {AiOutlineEdit} from 'react-icons/ai'
import {MdOutlineCreate} from 'react-icons/md'
import React from "react";
import './AddWord.css'
//add or edit word
const AddWord = () => {
  const [text, setText] = useState("");
  const history = useHistory();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getWordsById(params.id).then((word) => {
        setText(word.text);
      });
    }
  }, [params.id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWord = {
      text,
    };
    if (params.id) {
      await updateWord(params.id, newWord);
    } else {
      await createWord(newWord);
    }
    history.push("/words");
  };

  return (
    <div className="word-entry" >
      {params.id ? (<h4>Edit Word</h4>) : (<h4>Add a new Word</h4>)}
      <form onSubmit={handleSubmit} className="add-container">
        <div >
        <label htmlFor="text">Word:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        {params.id ? (<button className="mybutton " type='submit' ><AiOutlineEdit className="edit-icon" size="35px"/></button>) : (<button type='submit' className="mybutton "> <MdOutlineCreate className="edit-icon" size="35px"/></button>)}
        </div>
      </form>
    </div>
  );
};

export default AddWord;
