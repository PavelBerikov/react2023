import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({type: 'INC', payload: 2})
    };
    const decrement = () => {
        dispatch({type: 'DEC', payload: 3})
    };
    const reset = () => {
        dispatch({type: 'RES'})
    };
    return (
        <div>
            <h2>{store}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default App;