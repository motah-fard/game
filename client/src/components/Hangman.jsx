import "./Hangman.css";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAllWords, addGame } from "../services";
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
  // const [randomWord, setRandomWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrong, setWrong] = useState(0);
  const [myWord, setMyWord] = useState([]);
  const history = useHistory();
  const [game,setGame]=useState([])

 
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
  }, [toggle]);

  useEffect(() => {
    if (words.length !== 0) {
      const text = words[Math.floor(Math.random() * words.length)];
      setMyWord(text);
      console.log(text);
      props.setRandomWord(text.text.toUpperCase());
    }
  }, [words]);
  useEffect(() => {
    //if every letter of the randomWord is inside of guessed letters
    if (
      props.randomWord &&
      props.randomWord.split("").every((letter) => guessedLetters.includes(letter))
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
// making the game
const handleClick = async (wordId) => {
  const game = await addGame(wordId);
  setGame(game)
  console.log(game)
}
  function handelGuess(letter) {
    // if this letter has not been guessed before
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      //if letter is not in the randomword
      if (!props.randomWord.includes(letter)) {
        setWrong(wrong + 1);
        // return wrong;
        console.log(wrong);
      }
    }
  }
  const output = props.randomWord.toUpperCase().split("");
  const guess = output.map((letter) =>
    guessedLetters.includes(letter) ? letter : "-"
  );
  return (
    <div>
      <h3>Hello {props.user.username}!</h3>
      <h1>{guess}</h1>
      
      <div className="hangman">{steps[wrong]}</div>
      <div>{getButtons()}</div>
      {props.randomWord}
      <button onClick={() => handleClick(myWord.id)}>make the game</button>
    </div>
  );
};

export default Hangman;
