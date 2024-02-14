import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {usersService} from "../services";
import {usersActions} from "../redux";
import {useForm} from "react-hook-form";
import {User} from "./User";

const Users = () => {
    const {users} = useSelector(state => state.users);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => dispatch(usersActions.setAllUsers(value)))
    }, [])
    const save =/*async*/ (user) => {
        dispatch(usersActions.createNewUser(user))
        /*const {data} = await  dispatch(usersActions.createNewUser(user));*/
    };
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                <input type={'text'} placeholder={'username'} {...register('username')}/>
                <input type={'text'} placeholder={'email'} {...register('email')}/>
                <button>Save</button>
            </form>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }

        </>
    );
};

export {Users};