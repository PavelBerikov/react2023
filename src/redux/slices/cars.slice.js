import {createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null,
    trigger: false
};
let slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCars: (state, actions) => {
            state.cars = actions.payload
            state.trigger = true
        },
        addCars: (state, actions) => {
            carService.createCar(actions.payload)
            state.trigger = !state.trigger
            
        },
        deleteCar: (state, actions) => {
            carService.deleteById(actions.payload)
            state.trigger = !state.trigger
            
        },
        updateCar: (state, actions) => {
            const {id} = state.carForUpdate;
            carService.updateById(id, actions.payload)
            state.trigger = !state.trigger
            
        },
        setCarForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload
        }
    }
});

const {reducer: carReducer, actions} = slice;
const carActions = {
    ...actions
};
export {
    carReducer, carActions
};