import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {usersActions} from "../../redux";
import {User} from "./User";
import {UserForm} from "./UserForm";

const Users = () => {
    let {users} = useSelector(state => state.users);
    let dispatch = useDispatch();
    useEffect(() => {
        usersService.getAll().then(value => value.data).then(value => dispatch(usersActions.setUsers(value)))
    }, [dispatch])
    return (
        <div>
            <UserForm/>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export {Users};