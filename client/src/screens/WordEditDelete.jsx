import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import React from 'react';
import { deleteWord, getWordsById } from "../services/index";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

const WordEditDelete = (props) => {
    const ID = props.word.id;

    const handelDelete = async () => {
        await deleteWord(ID)
        props.setToggleFetch((curr) => !curr); 
    }
    return (
        <div>
            <h5>{props.word.text}</h5>
            <RiCloseCircleLine className='delete-icon' onClick={handelDelete} size="35px"/>
            <Link to={`/edit-word/${ID}`}>
                <TiEdit className='edit-icon' size="35px"/>
            </Link>
        </div>
    );
};

export default WordEditDelete;