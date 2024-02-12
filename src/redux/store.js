import {combineReducers} from "redux";
import {carsReducer, usersReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    users: usersReducer,
    cars: carsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};