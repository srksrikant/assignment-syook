import React, { useState } from 'react';
import Icon from "../_images/icon.png";

export default function NoteTemplate({ data, handleDelete, handleEdit, editFeedback }) {
    let { title, description } = data;
    const [editSectionVisible, setEditSectionVisible] = useState(false);

    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);

    const toggleEditSection = () => {
        setEditSectionVisible(!editSectionVisible);
        setEditTitle(title);
        setEditDescription(description);
    }

    const hideEditSection = () => {
        setEditSectionVisible(false);
    }

    return (
        <div className="notes-container" >
            <div className="notes-template">
                <div className="icon-cont" >
                    <img src={Icon} />
                </div>
                <div className="text-cont" >
                    <div>{title}</div>
                    <span>{description}</span>
                </div>
                <div className="buttons-cont" >
                    <div className="buttons" onClick={() => { toggleEditSection() }} >
                        Edit
                    </div>
                    <div className="buttons" onClick={() => { handleDelete(title) }}  >
                        Delete
                    </div>
                </div>
            </div>
            {
                editSectionVisible ?
                    <div className="edit-container" >
                        <input type="text" placeholder="Enter Title" value={editTitle} onChange={(e) => { setEditTitle(e.target.value) }} />
                        <textarea placeholder="Enter Description" value={editDescription} onChange={(e) => { setEditDescription(e.target.value) }} />
                        <div className="buttons" onClick={() => {
                            handleEdit(title, editTitle, editDescription, hideEditSection)
                        }} >Save</div>
                        {
                            editFeedback === "" ?
                                null
                                :
                                <span className="editfeedback-message" >{editFeedback}</span>
                        }
                    </div>
                    :
                    null
            }
        </div>
    )
}
