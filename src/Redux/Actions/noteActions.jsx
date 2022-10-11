import { ADD_NOTE } from "./actionsConst"
import { DELETE_NOTE } from "./actionsConst"
export const add_Note=(note)=>{
    return {
        type:ADD_NOTE,
        payload:note
    }
}
export const delete_Note=(note)=>{
    return {
        type:DELETE_NOTE,
        payload:note
    }
}