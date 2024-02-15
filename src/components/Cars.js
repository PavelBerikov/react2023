import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux";
import {Car} from "./Car";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carsActions.getAll())
    }, [cars])
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};