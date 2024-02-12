import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services";
import {usersActions} from "../redux";
import {useForm} from "react-hook-form";

const Users = () => {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const save =async (user) => {
        const {data} = await  dispatch(usersActions.createNewUser(user));
    };
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'email'} {...register('email')}/>
                <button>Save</button>
            </form>

        </>
    );
};

export {Users};