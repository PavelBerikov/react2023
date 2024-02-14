import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
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