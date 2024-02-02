import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux";


const App = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment())
    };
    const onDecrement = () => {
        dispatch(decrement())
    };
    const onReset = () => {
        dispatch(reset())
    };
    return (
        <div>
            <h2>{store}</h2>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
            <button onClick={onReset}>reset</button>
        </div>
    );
};

export default App;