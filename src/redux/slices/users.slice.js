import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
};
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        createNewUser: (state, actions) => {
            actions.payload.id = state.users.length + 1
            state.users.push(actions.payload)
        },
        setAllUsers: (state, actions) => {
            state.users = actions.payload
        }
    }
});
const {reducer: usersReducer, actions} = slice;
const usersActions = {
    ...actions
};

export {
    usersReducer, usersActions
};