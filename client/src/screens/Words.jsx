import { useEffect, useState } from "react";
import { getAllWords, addGame } from "../services";
import React from "react";

const Words = (props) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  }, []);


  return (
    <div>
      <h1>Hello {props.user.username}!</h1>
      {words.map((word) => (
        <div>
          <h3>{word.text}</h3>
        </div>
      ))}
    </div>
  );
};

export default Words;