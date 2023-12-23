import React, {useEffect, useState} from 'react';
import {carService} from "../Services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [allCars, setAllCars] = useState(null);
    const [carId, setCarId] = useState(null);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
        return () => {
            console.log('Done!')
        }
    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} carId={carId}/>
            <hr/>
            {
                cars.map(car => <Car car={car} setCarId={setCarId} setCarForUpdate={setCarForUpdate} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;