import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import teams from "./teamList";
var reducers = combineReducers({
    teams:teams,
    router: routerReducer
})

export default reducers;