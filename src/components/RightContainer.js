import React from 'react';
import "./styles.css";
import NoteTemplate from "../template/noteTemplate";

export default function RightContainer({ data, handleDelete, handleEdit, editFeedback, searchText, handleSearch }) {
    return (
        <div className="right-container" >
            <input type="text" className="search-bar" placeholder="Search Here ..." value={searchText} onChange={(e) => { handleSearch(e.target.value) }} />
            <div className="heading" >My Notes</div>
            <div>
                {
                    data.map((element, index) => {
                        return <NoteTemplate key={index} data={element} handleDelete={handleDelete} handleEdit={handleEdit} editFeedback={editFeedback} />
                    })
                }
            </div>
        </div>
    )
}
