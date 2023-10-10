import React from 'react';

const PostDetails = ({postDetails}) => {
    return (
        <div>
            <div>UserId - {postDetails.userId}</div>
            <div>{postDetails.id} - {postDetails.title}</div>
            <div>{postDetails.body}</div>
        </div>
    );
};

export default PostDetails;