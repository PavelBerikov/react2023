import React from 'react';

const Car = ({car, setCarForUpdate, setCarId}) => {
    const {id, brand, price, year} = car;
    const foo = () => {
        setCarForUpdate(car)
        setCarId(car.id)
    }
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={foo}>Update</button>
            <hr/>
        </div>
    );
};

export default Car;