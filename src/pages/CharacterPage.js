import React from 'react';
import {CharacterPagination, Characters} from "../Components";

const CharacterPage = () => {
    return (
        <div>
            <Characters/>
            <CharacterPagination/>
        </div>
    );
};

export {CharacterPage};