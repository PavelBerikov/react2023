import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            <div>User Id - {userId}</div>
            <div>{id} - {title}</div>
            <div>Status - {completed.toString()}</div>
            <hr/>
        </div>
    );
};

export default Todo;