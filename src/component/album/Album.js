import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <div>{id} - {title}</div>
        </div>
    );
};

export default Album;