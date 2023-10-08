import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {validator} from "../../configs/validator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services/car.service";

const CarForm = ({setCarForUpdate, setAllCars, carForUpdate, carId}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} = useForm({mode: "all", resolver: joiResolver(validator)});

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate])
    const create = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        reset()
    };

    const update = async (car, id) => {
        const {data} = await carService.updateById(carId, car);
        setAllCars(prev => !prev)
        setCarForUpdate(null)
        reset()
    };
    const deleter = async (id) => {
        const {data} = await carService.deleteById(carId);
        setAllCars(prev => !prev)
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update:create)}>
                <input type='text' placeholder='brand' {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type='text' placeholder='price' {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type='text' placeholder='year' {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
            <form onSubmit={handleSubmit(deleter)}>
                <button>Delete</button>
            </form>
        </div>
    );
};

export default CarForm;