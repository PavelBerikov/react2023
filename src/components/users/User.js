import React from 'react';

const User = ({user}) => {
    let {id, name, email, username} = user;
    return (
        <div>
            <div>{id} - {name}</div>
            <div>UserName - {username}</div>
            <div>Email - {email}</div>
            <hr/>
        </div>
    );
};

export {User};