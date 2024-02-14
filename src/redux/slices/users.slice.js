import {createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

let initialState = {
    users: []
};
const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        createNewUser: (state, actions) => {
            state.users.push(actions.payload)
            //сделать айдиху для нового юзера
            console.log(state.users.length)
        },
        setAllUsers: (state, actions) => {
            state.users = actions.payload
        }


        /* async (state, actions) => {
            const data = await usersService.create(actions.payload);
            console.log(data.data)

        }*/
    }
});
const {reducer: usersReducer, actions} = slice;
const usersActions = {
    ...actions
};

export {
    usersReducer, usersActions
};