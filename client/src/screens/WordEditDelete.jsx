import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import React from 'react';
import { deleteWord, getWordsById } from "../services/index";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const WordEditDelete = (props) => {
    const [ text,setText ]= useState('')
    const ID = props.word.id;
    useEffect(() => {
        getWordsById(ID).then((text) => setText(text))
        console.log(text)
    }, [ID]);

    const handelDelete = async () => {
        await deleteWord(ID)
        props.setToggleFetch((curr) => !curr); 
    }
    return (
        <div>
            <h5>{text.text}</h5>
            <RiCloseCircleLine className='delete-icon' onClick={handelDelete}/>
            <Link to={`/edit-word/${ID}`}>
                <TiEdit className='edit-icon'/>
            </Link>
        </div>
    );
};

export default WordEditDelete;