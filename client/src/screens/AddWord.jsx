import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createWord,  } from "../services";

import React from 'react';

const AddWord = () => {
    const [text, setText] = useState("");
    const history = useHistory();
    const params = useParams();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newWord = {
            text,
        }
        await createWord(newWord);
        history.push("/words");
      }
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="text">Word:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Create Word</button>
        </form>
        
            
        </div>
    );
};

export default AddWord;