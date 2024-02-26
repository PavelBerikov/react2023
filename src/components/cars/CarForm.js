import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm();
    const {carForUpdate} = useSelector(state => state.cars);
    let dispatch = useDispatch();
    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const create = async (car) => {
        await dispatch(carActions.addCars(car))
        reset()
    };
    const deleter =async (id) => {
        await dispatch(carActions.deleteCar(id))
        reset()
    };
    const update = async (car) => {
        await dispatch(carActions.updateCar(car))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate? update:create)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate? 'update':'save'}</button>
        </form>
    );
};

export {CarForm};