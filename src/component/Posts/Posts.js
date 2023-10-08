import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../services/posts.service";

const Posts = () => {
    const {state} = useLocation();
    const [post, setPost] = useState({});
    useEffect(() => {
        postsService.getById(state.postId).then(value => value.data).then(value => setPost({...value}))
        console.log('Done!')
    }, [state.postId])
    return (
        <div>
            <div>User Id - {post.userId}</div>
            <div>Title - {post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default Posts;