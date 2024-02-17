import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

let initialState = {
    characters: [],
    /*prevPage: null,
    nextPage: null*/
};

const getAll = createAsyncThunk(
    'characterSLice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await characterService.getAll();
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const slice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            const {results, info:{prev, next}} = action.payload
            state.characters = results
            state.prevPage = prev
            state.nextPage = next
        })
});

const {reducer: charactersReducer, actions} = slice;
const charactersActions = {
    ...actions,
    getAll
};

export {
    charactersActions, charactersReducer
};