import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: []
};
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCars: (state, actions) => {
            state.cars = actions.payload
        },
        createCar: (state, actions) => {
            carService.create(actions.payload)
        },
        deleteCar: (state, actions) => {
            carService.deleteById(actions.payload)
        }
    }
});
const {reducer: carsReducer, actions} = slice;
const carsActions = {
    ...actions
};

export {
    carsReducer, carsActions
};