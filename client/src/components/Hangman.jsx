import "./Hangman.css";
import Alphabet from "./Alphabet";
import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";


const Hangman = (props) => {
    const [words, setWords] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [randomWord, setRandomWord] = useState("");
    const [value,setValue] = useState('')
  
    useEffect(() => {
      getAllWords().then((fetchWords) => setWords(fetchWords));
    }, [toggle]);
    // console.log( words );
    useEffect(() => {
      if (words.length !== 0) {
        const text = words[Math.floor(Math.random() * words.length)].text;
        // console.log(text)
        setRandomWord(text);
        // console.log(randomWord);
      }
    }, [words]);
//   console.log(props.randomWord);
  
  const output = randomWord.toUpperCase().split("");
  useEffect(() => {
    letters.push(value)
    const guess = output.map((letter) => letters.includes(letter) ? letter : '-')
  }, [value]);

  let letters = ['A'];
  const guess = output.map((letter) => letters.includes(letter) ? letter : '-')
  function getButtons () {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
 
    return array.map((letter) => {
      return <button value={letter} >{letter}</button>;
    });
  };
useEffect(() => {
    letters.push(value)
    console.log(letters);
  }, [value]);

  return (
    <div>
      {guess}
      {/* <form onSubmit={handleClick}> */}
      <div onClick={(e)=>setValue(e.target.value)}>{getButtons()}</div>
      {/* </form> */}
      {randomWord}
      
      
    </div>
  );
};

export default Hangman;