import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return {...state, count1: state.count1 ++}
        case 'DEC':
            return {...state, count1: state.count1 --}
        case 'RES':
            return {...state, count1: action.payload}
        case 'INC2':
            return {...state, count2: state.count2 ++}
        case 'DEC2':
            return {...state, count2: state.count2 --}
        case 'RES2':
            return {...state, count2: action.payload}
    }

}
const App = () => {
    const [state, dispatch] = useReducer(reducer, {count1:0, count2:5});
    return (
        <div>
            <div>{state.count1}</div>
            <button onClick={() => dispatch({type: 'INC'})}>increment</button>
            <button onClick={() => dispatch({type: 'DEC'})}>decrement</button>
            <button onClick={() => dispatch({type: 'RES', payload: 0})}>reset</button>
            <div>{state.count2}</div>
            <button onClick={() => dispatch({type: 'INC2'})}>increment</button>
            <button onClick={() => dispatch({type: 'DEC2'})}>decrement</button>
            <button onClick={() => dispatch({type: 'RES2', payload: 15})}>reset</button>
        </div>
    );
};

export default App;