import {combineReducers} from "redux";
import {carsReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cars: carsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};