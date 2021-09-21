import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from '../reducers/techReducer'


export default combineReducers({
    log: logReducer,
    tech: techReducer
});

