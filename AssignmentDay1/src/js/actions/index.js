import {DATA_LOADED, ITEMS_LOADING} from "../constants/action-types"
import {INCREAMENT} from "../constants/action-types"
import {DECREAMENT } from "../constants/action-types"
import {RESET} from "../constants/action-types"
import store from "../store/index"
import { ADD_ARTICLE } from '../constants/action-types'


export function increament(){
    return { type : INCREAMENT};
}
export function decreament(){
    return { type : DECREAMENT};
}
export function reset(){
    return { type : RESET};
}

export function addArticle(payload){
    return {
        type:ADD_ARTICLE , payload
    };
}

// post example

export function getData(){
    store.dispatch({ type: ITEMS_LOADING });
    return function () {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=> response.json())
        .then( (json) => {
            store.dispatch({ type: DATA_LOADED, payload: json });
        });
    };
}

// employee form
export const SaveData =(data)=>(
    {
       type: "SAVE",
       payload: data
     
   }
)

