import "./Hangman.css";
import Alphabet from "./Alphabet";
import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";

const Hangman = (props) => {
  const [words, setWords] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [value, setValue] = useState('');
  const [guess, setGuess] = useState('')
//getting a random word from database
  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  }, [toggle]);

  useEffect(() => {
    if (words.length !== 0) {
      const text = words[Math.floor(Math.random() * words.length)].text;
      setRandomWord(text);
    }
  }, [words]);

 

  // making the buttons
  function getButtons() {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    return array.map((letter) => {
      return <button value={letter}>{letter}</button>;
    });
  }
 
  useEffect(() => {
    // guessing a letter like A and see if it is in the letter or not ()

    let letters = [];
    letters.push(value);
    const output = randomWord.toUpperCase().split("");
    const guess = output.map((letter) =>
    letters.includes(letter) ? letter : "-"
    
  );
  setGuess(guess)
    console.log(letters);
  }, [value]);
 
  return (
    <div>
      {guess}
      <div onClick={(e) => setValue(e.target.value)}>{getButtons()}</div>
      {randomWord}
    </div>
  );
};

export default Hangman;
