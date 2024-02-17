import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    query: new URLSearchParams(window.location.search)
};
const slice = createSlice({
    name: 'querySlice',
    initialState,
    reducers:{
        setPage: (state, action) => {
            state.query.set('page', action.payload)
    }
}});

const {reducer: queryReducer, actions} = slice;
const queryActions = {
    ...actions
};

export {
    queryReducer, queryActions
};