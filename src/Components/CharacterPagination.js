import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {
    const {nextPage, prevPage} = useSelector(state => state.characters);
    const [,setQuery] = useSearchParams();
    return (
        <div>
            <button disabled={!prevPage}>prev</button>
            <button disabled={!nextPage}>next</button>
        </div>
    );
};

export {CharacterPagination};