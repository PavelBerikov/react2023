import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
};
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        setAllUsers: (state, action) => {
            const {id, name, username, email} = action.payload
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