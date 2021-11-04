import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";

const RandomWord = (props) => {
  const [words, setWords] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  },[toggle]);//something here should
  console.log({ words });
  return (
    <div>
      {words.text? (
      <>
      {words.Math.floor(Math.random)*words.length.text}
      </>
      ) : (
          <></>
      )}
    </div>
  );
};

export default RandomWord;



