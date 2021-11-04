import React, { Component, useState } from "react";
import "./Hangman.css";
import RandomWord from "./RandomWord";
import ReactDOMServer from "react-dom/server";
import Alphabet from "./Alphabet";

const Hangman = (props) => {
  let a = ReactDOMServer.renderToString(RandomWord());
  a = a.replace('<div data-reactroot="">', "");
  const randomWord = a.replace("</div>", "").toUpperCase();
  var output = randomWord.split("");

  let b = "-";

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
console.log(alphabet)
  let letters = ['A'];
  const guess = output.map((letter) => letters.includes(letter) ? letter : '-')


  return (
    <div>
      {guess}
      <Alphabet/>
    </div>
  );
};

export default Hangman;
