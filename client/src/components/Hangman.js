import React, {Component, useState} from 'react';
import './Hangman.css'
import RandomWord from './RandomWord'
import ReactDOMServer from 'react-dom/server'



const Hangman = (props) => {
    let a = ReactDOMServer.renderToString(RandomWord())
    a = a.replace('<div data-reactroot="">',"")
    let randomWord = a.replace('</div>','')
    const [word,setWord] = useState('')
    console.log(randomWord );
    return (
        <div>

        </div>
    );
};

export default Hangman;