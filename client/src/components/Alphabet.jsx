import React, { Component, useState } from "react";


function Alphabet (){
  const [buttonLetter, setButtonLetter] = useState ('');
  function getButtons () {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

    return array.map((letter) => {
      return <button>{letter}</button>;
    });
  };



    return (
    <div>{getButtons()}</div>
    )

}

export default Alphabet;
