import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodesReducer, paginationReducer} from "./slices";

const rootReducer = combineReducers({
    characters: charactersReducer,
    episodes: episodesReducer,
    pagination: paginationReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};