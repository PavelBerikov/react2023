import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {baseURL} from "./Components/car.api";



const App = () => {
    const store = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: 'START_LOADING'})
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json()).then(value => dispatch({type: 'SET_CARS', payload: value}))
    }, [])
    return (
        <div>
            {store.isLoading && <h1>Loading...</h1>}
            {
                store.cars.map(car => <div key={car.id}>{car.brand}</div>)
            }
        </div>
    );
};

export default App;