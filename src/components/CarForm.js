import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carsActions} from "../redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators";

const CarForm = () => {
    const {reset, register, handleSubmit, formState:{errors, isValid}, setValue} = useForm({mode: "all", resolver: joiResolver(carValidator)});
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = (car) => {
        dispatch(carsActions.create({car}))
        reset()
    };
    const update = (car) => {
        const ind = carForUpdate.id
        dispatch(carsActions.updater({id: carForUpdate.id, car}))
        reset()
    };
    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate? update:save)}>
                <input type={'text'} placeholder={'brand'} {...register('brand')}/>
                <input type={'text'} placeholder={'price'} {...register('price')}/>
                <input type={'text'} placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate? 'Update':'Save'}</button>
            </form>
        </>
    );
};

export {CarForm};