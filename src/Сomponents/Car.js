import React from 'react';

const Car = ({car, setCarForUpdate, setCarId}) => {
    const {id, brand, price, year} = car;
    const foo = () => {
        setCarForUpdate(car)
        setCarId(id)
    }
    return (
        <div>
            <div>{id}-{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={foo}>Update</button>
            <hr/>
        </div>
    );
};

export default Car;