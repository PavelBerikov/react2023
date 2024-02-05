import React from 'react';

const Character = ({character}) => {
    const {id, name, status, image} = character;
    return (
        <div>
            <div>id - {id}</div>
            <div>Name - {name}</div>
            <div>Status - {status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};