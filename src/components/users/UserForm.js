import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {usersActions} from "../../redux";

const UserForm = () => {
    const {register, reset, handleSubmit} = useForm();
    let dispatch = useDispatch();

    const create = (user) => {
        dispatch(usersActions.addUser(user))
        reset()
    };
    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'UserName'} {...register('username')}/>
            <input type="text" placeholder={'Email'} {...register('email')}/>
            <button>Add</button>
        </form>
    );
};

export {UserForm};