import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div>
            <h5>{id} - {name}</h5>
            <div>Email - {email}</div>
            <p>{body}</p>
            <hr/>
        </div>
    );
};

export {Comment};