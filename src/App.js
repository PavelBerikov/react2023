import React from 'react';
import {Characters, CharactersPagination} from "./components";

const App = () => {
    return (
        <div>
            <Characters/>
            <CharactersPagination/>
        </div>
    );
};

export {App};