import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../Services/car.service";


const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: "all"});
    useEffect(() => {
        if (carForUpdate) {

        }
    })
    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
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
            <button>Save</button>
        </form>
    );
};

export default CarForm;