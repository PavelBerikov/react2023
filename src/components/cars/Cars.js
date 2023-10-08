import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../car/Car";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState([]);
    const [carId, setCarId] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
        return () => {
            console.log('Done!')
        }
    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate} carId={carId}/>
            <hr/>
            {
                cars.map(car => <Car car={car} setCarForUpdate={setCarForUpdate} setCarId={setCarId} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;