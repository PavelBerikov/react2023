import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    comments: []
};
const slice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setAllComments: (state, actions) => {
            state.comments = actions.payload
        },
        addComments: (state, actions) => {
            actions.payload.id = state.comments.length + 1
            state.comments.push(actions.payload)
        }
    }
});

const {reducer: commentsReducer, actions} = slice;
const commentsActions = {
    ...actions
};

export {
    commentsReducer, commentsActions
};