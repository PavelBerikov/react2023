import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
};
let slice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers:{
        setUsers: (state, actions) => {
            state.users = actions.payload
        },
        addUser: (state, actions) => {
            actions.payload.id = state.users.length + 1
            state.users.push(actions.payload)
        }
    }
});

let {reducer: usersReducer, actions} = slice;
const usersActions = {
    ...actions
};

export {
    usersReducer, usersActions
};