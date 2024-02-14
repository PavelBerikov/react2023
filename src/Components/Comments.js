import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../services";
import {commentsActions} from "../redux";
import {Comment} from "./Comment";
import {useForm} from "react-hook-form";

const Comments = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const {reset, register, handleSubmit} = useForm();
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => dispatch(commentsActions.setAllComments(value)))
    }, [])
    const add = (comment) => {
        dispatch(commentsActions.addComments(comment))
    };
    return (
        <>
            <form onSubmit={handleSubmit(add)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                <input type={'text'} placeholder={'email'} {...register('email')}/>
                <input type={'text'} placeholder={'comment'} {...register('body')}/>
                <button>Add comment</button>
            </form>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </>
    );
};

export {Comments};