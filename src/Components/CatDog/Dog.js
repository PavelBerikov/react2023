import React from 'react';

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            <div>{name}<button onClick={() => dispatch({type: 'DEL_DOG', payload: id})}>Delete</button></div>

        </div>
    );
};

export default Dog;