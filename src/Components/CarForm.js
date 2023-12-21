import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "all"});
    return (
        <form>
            <input type={'text'} placeholder={'brand'} {...register('brand')} />
            <input type={'text'} placeholder={'price'} {...register('price')}/>
            <input type={'text'} placeholder={'year'} {...register('year')}/>
        </form>
    );
};

export default CarForm;