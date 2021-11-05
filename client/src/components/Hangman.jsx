import "./Hangman.css";
import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";
import Test from "../screens/Test";

const Hangman = (props) => {
  const [words, setWords] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  //getting a random word from database'
  const steps = [<Test/>, 0, 1, 2, 3, 4, 5]
  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  }, [toggle]);

  useEffect(() => {
    if (words.length !== 0) {
      const text = words[Math.floor(Math.random() * words.length)].text;
      setRandomWord(text.toUpperCase());
    }
  }, [words]);
  useEffect(() => {
    //if every letter of the randomWord is inside of guessed letters
    if (
      randomWord &&
      randomWord.split("").every((letter) => guessedLetters.includes(letter))
    ) {
      console.log("You WON");
    }
  }, [guessedLetters]);
  useEffect(() => {
    //if wrong is bigger than 6 say you lost
    if (wrong >= 5) {
      console.log("You LOST");
    }
  }, [wrong]);

  // making the buttons
  function getButtons() {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    return array.map((letter) => {
      return <button onClick={() => handelGuess(letter)}>{letter}</button>;
    });
  }
  function handelGuess(letter) {
    // if this letter has not been guessed before
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      //if letter is not in the randomword
      if (!randomWord.includes(letter)) {
        setWrong(wrong + 1);
        // return wrong;
        console.log(wrong);
      }
    }
  }
  const output = randomWord.toUpperCase().split("");
  const guess = output.map((letter) =>
    guessedLetters.includes(letter) ? letter : "-"
  );
  return (
    <div>
      
      <Test />
      {guess}
      {wrong}
      <div>{getButtons()}</div>
      {randomWord}
    </div>
  );
};

export default Hangman;
