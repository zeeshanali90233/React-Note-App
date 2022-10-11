// import { useEffect } from "react";
import { ADD_NOTE } from "../Actions/actionsConst";
import { DELETE_NOTE } from "../Actions/actionsConst";

let newState=[];
let initialState;
if(localStorage.getItem('notes')){
    initialState=JSON.parse(localStorage.getItem('notes'));
}
else{
    initialState=[];
}
const noteReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NOTE:
            newState=[...state,noteObj(state.length,action.payload)];
            localStorage.setItem('notes',JSON.stringify(newState));
            return newState;
        case DELETE_NOTE:
            newState=state.filter((note)=>{return note!==action.payload});
            localStorage.setItem('notes',JSON.stringify(newState));
            return newState;
        default:
            return state
    }
}

export default noteReducer;

// to create new node structure
const noteObj=(id,note)=>{
    return {
        id:id+1,
        desc:note
    }
}