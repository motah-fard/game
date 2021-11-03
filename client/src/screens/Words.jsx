import { useEffect, useState } from "react";
import { getAllWords, addGame } from "../services";
import React from "react";

const Words = (props) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  }, []);

  const handleClick = async (wordId) => {
    const user = await addGame(wordId);
    props.setUser(user);
  };
  return (
    <div>
      {words.map((word) => (
        <div>
          <h3>{word.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Words;
