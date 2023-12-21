import React, {useEffect, useState} from 'react';
import {carService} from "../Services/car.service";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars([...value]))
        return () => {
            console.log('Done!')
        }
    }, [])
    return (
        <div>
            <CarForm/>
            <hr/>
            {
                cars.map(car => <Car car={car} key={car.id}/>)
            }
        </div>
    );
};

export default Cars;