import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {count1Reducer} from "./slices";
import {count2Reducer} from "./slices/count2.slice";

const rootReducer = combineReducers({
    count1: count1Reducer,
    count2: count2Reducer

});
const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}