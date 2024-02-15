import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null
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
            await carService.create(car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const updater = createAsyncThunk(
    'carSlice/updater',
    async ({car}, thunkAPI) => {
        try {
            await carService.update(car.id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    },
    extraReducers: builder =>
        builder.addCase(getAll.fulfilled, (state, action) => {
            state.cars = action.payload
        })
});
const {reducer: carsReducers, actions} = slice;
const carsActions = {
    ...actions,
    getAll,
    create,
    updater
};

export {
    carsReducers, carsActions
};