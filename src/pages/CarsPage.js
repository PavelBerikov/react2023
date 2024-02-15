import React from 'react';
import {CarForm, Cars} from "../components";
import {useSelector} from "react-redux";

const CarsPage = () => {
    const {loading, error} = useSelector(state => state.cars);

    return (
        <div>
            <CarForm/>
            {loading&& <h1>LOADING...</h1>}
            {error&& <h3>{JSON.stringify(error)}</h3>}
            <Cars/>

        </div>
    );
};

export {CarsPage};