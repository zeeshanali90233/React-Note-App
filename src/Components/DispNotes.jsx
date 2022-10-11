import "../index.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import React from "react";
import { delete_Note } from "../Redux/Actions/noteActions";


export const DispNotes = (props) => {
    const handleDelete=()=>{
        props.dispatch(delete_Note(props.note));
    }
  return (
    <div className=" each-note d-flex flex-column">
      <p>{props.note.desc}</p>
      <div className="delete-btn-box">
        <button className="delete-btn" onClick={handleDelete}><MdOutlineDeleteOutline size={25}/></button>
      </div>
    </div>
  );
};
