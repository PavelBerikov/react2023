import {combineReducers} from "redux";
import {carsReducers} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cars: carsReducers
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}