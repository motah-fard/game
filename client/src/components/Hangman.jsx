import "./Hangman.css";
import Alphabet from "./Alphabet";
import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";


const Hangman = (props) => {
    const [words, setWords] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [randomWord, setRandomWord] = useState("");
  
    useEffect(() => {
      getAllWords().then((fetchWords) => setWords(fetchWords));
    }, [toggle]);
    // console.log( words );
    useEffect(() => {
      if (words.length !== 0) {
        const text = words[Math.floor(Math.random() * words.length)].text;
        console.log(text)
        setRandomWord(text);
        console.log(randomWord);
      }
    }, [words]);
  console.log(props.randomWord);
  
  const output = randomWord.toUpperCase().split("");


  let letters = ['A'];
  const guess = output.map((letter) => letters.includes(letter) ? letter : '-')


  return (
    <div>
      {guess}
      <Alphabet/>
      {randomWord}

    </div>
  );
};

export default Hangman;