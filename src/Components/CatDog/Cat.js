import React from 'react';
import {type} from "@testing-library/user-event/dist/type";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;
    return (
        <div>
            <div>{name}<button onClick={() => dispatch({type: 'DEL_CAT', payload: id})}>Delete</button></div>

        </div>
    );
};

export default Cat;