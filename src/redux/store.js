import {combineReducers} from "redux";
import {usersReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
   users: usersReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};