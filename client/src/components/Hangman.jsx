import "./Hangman.css";
import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";
import Test from "../screens/Test";
import Test1 from "../screens/Test1";
import Test2 from "../screens/Test2";
import Test3 from "../screens/Test3";
import Test4 from "../screens/Test4";
import Test5 from "../screens/Test5";
import Test6 from "../screens/Test6";
import Test7 from "../screens/Test7";
import { useHistory } from "react-router-dom";

const Hangman = (props) => {
  const [words, setWords] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  const history = useHistory();
  //getting a random word from database'
  const steps = [
    <Test1 />,
    <Test2 />,
    <Test3 />,
    <Test4 />,
    <Test5 />,
    <Test6 />,
    <Test7 />,
    <Test />,
  ];
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
      history.push("/home"); // make a jsx file for Won page
    }
  }, [guessedLetters]);
  useEffect(() => {
    //if wrong is bigger than 6 say you lost
    if (wrong >= 5) {
      console.log("You LOST");
      history.push("/home"); // make a jsx file for lost page
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
      {guess}
      <div className="hangman">{steps[wrong]}</div>
      <div>{getButtons()}</div>
      {randomWord}
    </div>
  );
};

export default Hangman;
