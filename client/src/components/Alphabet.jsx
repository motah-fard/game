import React from "react";
import { useEffect, useState } from "react";

function Alphabet (){
  // const [buttonLetter, setButtonLetter] = useState('')
  // const [toggle, setToggle] = useState(false);
  function getButtons () {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
 
    return array.map((letter) => {
      return <button value={letter} >{letter}</button>;
    });
  };



    return (
    <div>{getButtons()}</div>
    )

}

export default Alphabet;
