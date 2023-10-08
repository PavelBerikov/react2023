import React, {useEffect, useState} from 'react';
import {commentsService} from "../services/comments.service";
import Comment from "../Comment/Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentsService.getAll().then(value => value.data).then(value => setComments([...value]))
        return () => {
            console.log('Done!')
        }
    }, [])
    return (
        <div>
            <Outlet/>
            {
                comments.map(comment => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;