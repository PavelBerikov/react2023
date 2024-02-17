import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    startPage: 1
};
const slice = createSlice({
    name: 'paginationSlice',
    initialState,
    reducers: {

    }
});

const {reducer: paginationReducer, actions} = slice;
const paginationActions = {
    ...actions
};

export {
    paginationActions, paginationReducer
};