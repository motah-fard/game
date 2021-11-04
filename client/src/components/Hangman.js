import React, { Component, useState } from "react";
import "./Hangman.css";
import RandomWord from "./RandomWord";
import ReactDOMServer from "react-dom/server";

const Hangman = (props) => {
  let a = ReactDOMServer.renderToString(RandomWord());
  a = a.replace('<div data-reactroot="">', "");
  const randomWord = a.replace("</div>", "").toUpperCase();
  var output = randomWord.split("");
  console.log(randomWord.length);
  console.log(output);
  let b = "-";
//   let testarray = [];
//   for (let i = 0; i < randomWord.length; i++) {
//       testarray.push(b)
      
//   }
  let letters = ['A'];
  const guess = output.map((letter) => letters.includes(letter) ? letter : '-')
  console.log(guess)
  // randomWord.length


  return (
    <div>
      {guess}
    </div>
  );
};

export default Hangman;
