import React from 'react';

const Post = ({post,setPostDetails}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <div>{id} - {title}</div>
            <button onClick={() => setPostDetails(post)}>Details</button>
        </div>
    );
};

export default Post;