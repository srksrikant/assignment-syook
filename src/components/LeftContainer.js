import React, { useState } from 'react';
import "./styles.css";

export default function LeftContainer({ addNotes, feedback }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="left-container" >
            <label>Title</label>
            <input type="text" onChange={(e) => { setTitle(e.target.value) }} />
            <label>Description</label>
            <textarea onChange={(e) => { setDescription(e.target.value) }} />
            {
                feedback === "" ? null :
                    <span className="feedback-message" >{feedback}</span>
            }
            <div className="submit-button" onClick={() => { addNotes(title, description) }} >SUBMIT</div>
        </div>
    )
}
