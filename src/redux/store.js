import {combineReducers} from "redux";
import {carsReducer, commentsReducer, usersReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    users: usersReducer,
    cars: carsReducer,
    comments: commentsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};