import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {userId, id, name, email, body} = comment;
    return (
        <div>
            <Link to={'post'} state={{...comment}}>{id} - {name}</Link>
        </div>
    );
};

export default Comment;