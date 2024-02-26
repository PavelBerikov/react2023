import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentsActions} from "../../redux";

const CommentsForm = () => {
    const {reset, register, handleSubmit} = useForm();
    let dispatch = useDispatch();
    const add = (comment) => {
        dispatch(commentsActions.addComments(comment))
        reset()
    };
    return (
        <form onSubmit={handleSubmit(add)}>
            <input type={'text'} placeholder={'name'} {...register('name')}/>
            <input type={'text'} placeholder={'email'} {...register('email')}/>
            <input type={'text'} placeholder={'comment'} {...register('body')}/>
            <button>Add comment</button>
        </form>
    );
};

export {CommentsForm};