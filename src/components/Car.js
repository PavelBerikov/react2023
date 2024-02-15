import React from 'react';

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>{id} - {brand}</div>
            <div>Price- {price}</div>
            <div>Year - {year}</div>
            <button>Delete</button> <button>Update</button>
            <hr/>
        </div>
    );
};

export {Car};