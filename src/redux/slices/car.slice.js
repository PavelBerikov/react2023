import {createAsyncThunk, createSlice, isPending, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null,
    error: null,
    loading: null,
    trigger: null
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
    async ({id, car}, thunkAPI) => {
        try {
            await carService.update(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const deleter = createAsyncThunk(
    'carSlice/deleter',
    async (id, thunkAPI) => {
        try {
            await carService.delete(id)
        }catch (e){
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
            state.loading = null
        })
            .addMatcher(isPending(), state => {
                state.loading = !state.loading
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload
                state.loading = null
            })
            .addMatcher(isFulfilled(), state => {
                state.loading = null
                state.error = null
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(updater, create, deleter), state => {
                state.trigger = !state.trigger
            })
});
const {reducer: carsReducers, actions} = slice;
const carsActions = {
    ...actions,
    getAll,
    create,
    updater,
    deleter
};

export {
    carsReducers, carsActions
};