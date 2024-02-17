import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodesReducer} from "./slices";

const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};