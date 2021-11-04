import React from "react";
import { useEffect, useState } from "react";
import { getAllWords } from "../services";

const RandomWord = (props) => {
  const [words, setWords] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  },[]);//something here should
  console.log({ words });
  return (
    <div>
      {words.text? (
      <>
      {words.Math.floor(Math.random)*words.length.text}
      </>
      ) : (
          <>Hello</>
      )}
    </div>
  );
};

export default RandomWord;



