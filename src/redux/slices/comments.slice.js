import {createSlice} from "@reduxjs/toolkit";

let initialState ={
    comments: []
};
let slice = createSlice({
    name: 'commentsSLice',
    initialState,
    reducers: {
        setComments: (state, actions) => {
            state.comments = actions.payload
        },
        addComments: (state, actions) => {
            actions.payload.id = state.comments.length + 1
            state.comments.push(actions.payload)
        }
    }
});
let {reducer: commentsReducer, actions} = slice;
const commentsActions = {
    ...actions
};

export {
    commentsActions, commentsReducer
};