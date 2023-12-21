import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../Services/car.service";


const CarForm = ({setAllCars, carForUpdate, setCarForUpdate, carId}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: "all"});
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        reset()
    };

    const update = async (id, car) => {
        const {data} = await carService.updateById(car, carId);
        setAllCars(prev => !prev)
        setCarForUpdate(null)
        reset()
    };

    const deleter = async (id) => {
        const {data} = await carService.deleteById(carId);
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type={'text'} placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'only letters'
                    },
                    required: {value: true}
                })} />
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type={'text'} placeholder={'price'} {...register('price', {
                    valueAsNumber: true,
                    min: {value: 0, message: 'min 0'},
                    max: {value: 1000000, message: 'max 1000000'},
                    required: true
                })}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type={'text'} placeholder={'year'} {...register('year', {
                    valueAsNumber: true,
                    min: {value: 1990, message: 'min 1990'},
                    max: {value: new Date().getFullYear(), message: 'max 2023'},
                    required: true
                })}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
            </form>
            <form onSubmit={handleSubmit(deleter)}>
                <button>DEL</button>
            </form>
        </>
    );
};

export default CarForm;