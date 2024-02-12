import {createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

let initialState = {
    users: []
};
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        createNewUser: async (state, actions) => {
            const data = await usersService.create(actions.payload);
            console.log(data.data)

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