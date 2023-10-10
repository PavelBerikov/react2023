import React, {useEffect, useState} from 'react';
import {postsService} from "../services/posts.service";
import Post from "../post/Post";
import postDetails from "../postDetails/PostDetails";

const Posts = ({setPostDetails}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getAll().then(value => value.data).then(value => setPosts([...value]))
        return () => {
            console.log('Done!')
        }
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post} setPostDetails={setPostDetails}  key={post.id}/>)
            }
        </div>
    );
};

export default Posts;