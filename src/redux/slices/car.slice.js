import {createAsyncThunk, createSlice, isPending, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null,
    error: null,
    loading: false,
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
            state.loading = false
        })
            .addCase(updater.fulfilled, state => {
                state.carForUpdate = null
                state.loading = false
            })
            .addMatcher(isFulfilled(), state => {
                state.trigger = !state.trigger
                state.loading = false
            })
            .addMatcher(isPending(), state => {
                state.loading = true
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