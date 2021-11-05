import React from "react";
import { useEffect, useState } from "react";

function Alphabet (){
  const [buttonLetter, setButtonLetter] = useState('')
  const [toggle, setToggle] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    array.map((letter)=>{
      setButtonLetter(letter)
      console.log(letter);
    },[toggle])
  }
  function getButtons () {
    const array = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
 
    return array.map((letter) => {
      return <button onClick={handleClick}>{letter}</button>;
    });
  };



    return (
    <div>{getButtons()}</div>
    )

}

export default Alphabet;
