import "../index.css";

import React from "react";

export const SearchBar = (props) => {
  return (
    <div className="container mt-3 ">
      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          className="form-control rounded"
          aria-label="Text input with checkbox"
          placeholder="Search"
          value={props.searchTerm}
          onChange={(e)=>{props.setSearchTerm(e.target.value)}}
        ></input>
      </div>
    </div>
  );
};
