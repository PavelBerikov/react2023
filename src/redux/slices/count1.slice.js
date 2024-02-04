import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    count1: 0
};
const slice = createSlice({
    name: 'count1Slice',
    initialState,
    reducers: {
        inc:state => {
            state.count1 += 1
        },
        dec:state => {
            state.count1 -= 1
        },
        res:state => {
            state.count1 = 0
        }
    }
});

const {reducer: count1Reducer, action} = slice;

const count1Actions = {
    ...slice.actions
};

export {
   count1Reducer, count1Actions
};


















