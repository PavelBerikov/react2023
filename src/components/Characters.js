import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../redux";
import {Character} from "./Character";



const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(charactersActions.getAll())
    }, [characters])
    return (
        <div>
            {
                characters.map(character => <Character key={character.id} character={character}/> )
            }
        </div>
    );
};

export {Characters};