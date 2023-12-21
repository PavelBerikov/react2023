import React from 'react';

const Car = ({car, setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <hr/>
        </div>
    );
};

export default Car;