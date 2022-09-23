import { ADD_ARTICLE } from "../constants/action-types";

const initialState={
    lists: []
};

function formReducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        return Object.assign({}, state,{
            lists: state.lists.concat(action.payload)
        });
    }
    return state;
}

export default formReducer;