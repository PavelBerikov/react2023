import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodesReducer, queryReducer} from "./slices";

const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    query: queryReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};