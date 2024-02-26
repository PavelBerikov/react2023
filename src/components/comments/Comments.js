import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {commentsService} from "../../services";
import {commentsActions} from "../../redux";
import {Comment} from "./Comment";
import {CommentsForm} from "./CommentsForm";

const Comments = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => dispatch(commentsActions.setComments(value)))
    }, [dispatch])
    return (
        <div>
            <CommentsForm/>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/> )
            }
        </div>
    );
};

export {Comments};