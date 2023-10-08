import React from 'react';

const Car = ({car, setCarId, setCarForUpdate}) => {
    const {id, brand, price, year} = car;
    const foo = () =>{
      setCarId(id)
      setCarForUpdate(car)
    };
    return (
        <div>
            <div>Id - {id}</div>
            <div>Brand - {brand}</div>
            <div>Price - {price}</div>
            <div>Year - {year}</div>
            <button onClick={foo}>Update</button>
            <hr/>
        </div>
    );
};

export default Car;