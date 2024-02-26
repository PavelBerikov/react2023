import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {carActions} from "../../redux";
import {Car} from "./Car";
import {CarForm} from "./CarForm";

const Cars = () => {
    const {cars,trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        carService.getAll()
            .then(value => value.data)
            .then(value => dispatch(carActions.setCars(value)))
    }, [trigger])

    return (

        <div>
            <CarForm/>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export {Cars};