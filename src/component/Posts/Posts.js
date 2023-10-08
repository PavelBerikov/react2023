import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../services/posts.service";

const Posts = () => {
    const {state} = useLocation();
    const [post, setPost] = useState({});
    const {userId, id, title, body} = post
    useEffect(() => {
        postsService.getById(state.postId).then(value => value.data).then(value => setPost({...value}))
        console.log('Done!')
    }, [state.postId])
    return (
        <div>
            <div>User Id - {userId}</div>
            <div>Title - {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Posts;