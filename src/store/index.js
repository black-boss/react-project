

import {createStore, combineReducers, applyMiddleware} from "redux"

import tab from "./reducer/tab"
import user from "./reducer/user"

import reduxThunk from "redux-thunk"

const reducer = combineReducers({
    tab,
    user
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;