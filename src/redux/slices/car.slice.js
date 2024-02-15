import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: []
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI) => {
        try {
            const {data} = await carService.getAll();
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try{

        }catch (e) {

        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{

    },
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
});
const {reducer: carsReducers, actions} = slice;
const carsActions = {
    ...actions,
    getAll
};

export {
    carsReducers, carsActions
};