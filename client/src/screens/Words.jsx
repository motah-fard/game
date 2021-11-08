import { useEffect, useState } from "react";
import { getAllWords } from "../services";
import React from "react";
import WordEditDelete from "./WordEditDelete";
import './Word.css'

const Words = (props) => {
  const [words, setWords] = useState([]);
  
  const [ toggleFetch, setToggleFetch ] = useState(false)
  useEffect(() => {
    getAllWords().then((fetchWords) => setWords(fetchWords));
  }, []);


  return (
    <div className='word'>
      <h4>List of Words</h4>
      {words.map((word) => (
        <WordEditDelete setToggleFetch={setToggleFetch} key={word.id} word={word}/>
      ))}
    </div>
  );
};

export default Words;
{/* <TiEdit className='edit-icon' size="35px"/> */}
{/* <RiCloseCircleLine className='delete-icon' size="35px"/> */}