import { combineReducers } from "redux";
import counterReducer from './counterReducer'

import formReducer from './formReducer'


const rootReducer = combineReducers({
    counterReducer,
    formReducer,
    
})
export default rootReducer;