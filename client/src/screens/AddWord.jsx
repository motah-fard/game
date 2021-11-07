import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createWord, updateWord, getWordsById } from "../services";

import React from "react";
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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Word:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Create Word</button>
      </form>
    </div>
  );
};

export default AddWord;
