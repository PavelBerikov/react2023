import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../services";
import {carsActions} from "../redux";
import {Car} from "./Car";
import {useForm} from "react-hook-form";

const Cars = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm();
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {

    })
    useEffect(() => {
        carService.getAll()
            .then(value => value.data)
            .then(value => dispatch(carsActions.setCars(value)))
    }, [cars])
    const create = async (car) => {
        await dispatch(carsActions.createCar(car))
        reset()
    };
    const deleter =async (id) => {
        await dispatch(carsActions.deleteCar(id))
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(create)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}/>
                <input type={'text'} placeholder={'price'} {...register('price')}/>
                <input type={'text'} placeholder={'year'} {...register('year')}/>
                <button>Save</button>
            </form>
            <div>
                {
                    cars.map(car => <Car key={car.id} car={car}/>)
                }
            </div>
        </>
    );
};

export {Cars};