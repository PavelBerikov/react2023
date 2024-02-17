import React from 'react';

const Character = ({character}) => {
    const {name, status, image} = character;
    return (
        <div>
            <hr/>
            <div>Name - {name}</div>
            <div>Status - {status}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};