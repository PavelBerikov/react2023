import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../services";
import {carsActions} from "../redux";
import {Car} from "./Car";
import {useForm} from "react-hook-form";

const Cars = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm();
    const {cars,carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    useEffect(() => {
        carService.getAll()
            .then(value => value.data)
            .then(value => dispatch(carsActions.setCars(value)))
    }, [])
    const create = async (car) => {
        await dispatch(carsActions.createNewCar(car))
        reset()
    };
    const deleter =async (id) => {
        await dispatch(carsActions.deleteCar(id))
        reset()
    };
    const update = async (car) => {
        await dispatch(carsActions.updateCar(car))
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate? update:create)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}/>
                <input type={'text'} placeholder={'price'} {...register('price')}/>
                <input type={'text'} placeholder={'year'} {...register('year')}/>
                <button>{carForUpdate? 'update':'save'}</button>
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