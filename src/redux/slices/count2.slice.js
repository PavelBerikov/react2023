import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    count2: 0
};
const slice = createSlice({
    name: 'count2Slice',
    initialState,
    reducers: {
        inc: state => {
            state.count2 += 1
        },
        dec: state => {
            state.count2 -= 1
        },
        res: (state, action) =>{
            state.count2 = action.payload
        }
    }
});
const {reducer: count2Reducer, actions} = slice;
const count2Actions = {
    ...actions
};

export {
    count2Actions, count2Reducer
};