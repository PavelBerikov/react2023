import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {carReducer, commentsReducer, usersReducer} from "./slices";


const rootReducer = combineReducers({
    users: usersReducer,
    comments: commentsReducer,
    cars: carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};