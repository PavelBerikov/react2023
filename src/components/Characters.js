import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../redux";
import {Character} from "./Character";
import {useSearchParams} from "react-router-dom";
import {characterService} from "../services";



const Characters = () => {
    const {characters} = useSelector(state => state.characters);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])
    useEffect(() => {
        characterService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(charactersActions.setCharacters(value)))
        /*dispatch(charactersActions.getAll())*/
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