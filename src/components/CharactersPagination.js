import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharactersPagination = () => {
    const { page } = useSelector(state => state.query);
    const dispatch = useDispatch();

    const prev = () => {
        dispatch(setPage(+page - 1));
    };

    const next = () => {
        dispatch(setPage(+page + 1));
    };
    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {CharactersPagination};