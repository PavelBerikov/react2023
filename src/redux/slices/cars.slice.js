import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null
};
const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCars: (state, actions) => {
            state.cars = actions.payload
        },
        createNewCar: (state, actions) => {
            carService.createCar(actions.payload)
        },
        deleteCar: (state, actions) => {
            carService.deleteById(actions.payload)
        },
        updateCar: (state, actions) => {
            const {id} = state.carForUpdate
            carService.updateById(id, actions.payload)
            state.carForUpdate = null
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload

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