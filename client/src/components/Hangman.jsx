import "./Hangman.css";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getAllWords, updateGame } from "../services";
import Test from "../screens/Test";
import Test1 from "../screens/Test1";
import Test2 from "../screens/Test2";
import Test3 from "../screens/Test3";
import Test4 from "../screens/Test4";
import Test5 from "../screens/Test5";
import Test6 from "../screens/Test6";
import Test7 from "../screens/Test7";

const Hangman = (props) => {
  const [words, setWords] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  const [win, setWin] = useState(false);
  const history = useHistory();
  // const {id} = props.games.id;

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

  //getting a random word from database'
  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
    console.log(props.games);
  }, [toggle]);

  useEffect(() => {
    if (words.length !== 0) {
      const text = words[Math.floor(Math.random() * words.length)];
      props.setMyWord(text);
      // console.log(text);
      props.setRandomWord(text.text.toUpperCase());
    }
  }, [words]);
  useEffect(() => {
    //if every letter of the randomWord is inside of guessed letters
    if (
      props.randomWord &&
      props.randomWord
        .split("")
        .every((letter) => guessedLetters.includes(letter))
    ) {
      setWin(true);
      // const update = async ()=>{
      //   await updateGame(props.games.id,win)
      // }
      // update();

      console.log("You WON");
      history.push("/win"); // make a jsx file for Won page
    }
  }, [guessedLetters]);
  useEffect(() => {
    //if wrong is bigger than 6 say you lost
    if (wrong >= 5) {
      console.log("You LOST");
      history.push("/lose"); // make a jsx file for lost page
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
      if (!props.randomWord.includes(letter)) {
        setWrong(wrong + 1);
        // return wrong;
        // console.log(wrong);
      }
    }
  }
  const output = props.randomWord.toUpperCase().split("");
  const guess = output.map((letter) =>
    guessedLetters.includes(letter) ? letter : "-"
  );
  return (
    <div>
      
      <h3 >Wrong Guesses: {wrong} out of {6}</h3>
      <h1 >{guess}</h1>
      <div >{steps[wrong]}</div>
      <div >{getButtons()}</div>
    </div>
  );
};

export default Hangman;
