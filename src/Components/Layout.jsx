import '../index.css';


import React from 'react'
import { SearchBar } from './SearchBar';
import { DispNotes } from './DispNotes';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { add_Note } from '../Redux/Actions/noteActions';


export const Layout = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const [newNoteDes,setNewNoteDes]=useState('');  

    
    const handleSave=(e)=>{
        e.preventDefault();
        dispatch(add_Note(newNoteDes))
        setNewNoteDes('');
    }

    const dispatch=useDispatch();
    const notes=useSelector(state=>state);
  return (
    <React.Fragment>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <div className="notes-box container">
            {/* Displaying all the notes   */}
                {notes.filter((note)=>{
                    if(note.desc.toLowerCase().includes(searchTerm.toLowerCase())){return note}
                }).map((note)=>{
                    return (
                        <div key={note.id}>
                            <DispNotes note={note} dispatch={dispatch}/>
                        </div>
                    )
                })}
            {/* Now Note Add box */}
            <div className="new-node-input d-flex flex-column">
                <textarea name="noteDes" id="noteDes" cols="40" rows="8" placeholder='Description' onChange={(e)=>{setNewNoteDes(e.target.value)}} value={newNoteDes}></textarea>
                <button className='input-new-note-btn' onClick={handleSave}>Save</button>
            </div>
        </div>
    </React.Fragment>
  )
}
