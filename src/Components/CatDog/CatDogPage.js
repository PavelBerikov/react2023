import React, {useReducer} from 'react';
import Cats from "./Cats";
import Dogs from "./Dogs";

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]}
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]}
        case 'DEL_CAT':
            const idForDeleteCat = action.payload;
            return  {...state, cats: state.cats.filter(cat => cat.id !== idForDeleteCat)}
        case 'DEL_DOG':
            const idForDeleteDog = action.payload
            return {...state, dogs: state.dogs.filter(dog => dog.id !== idForDeleteDog)}
        default:
            return {...state}
    };

};
const CatDogPage = () => {
    const stateDispatch = useReducer(reducer, {cats:[], dogs:[]});
    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Cats stateDispatch={stateDispatch}/>
            <Dogs stateDispatch={stateDispatch}/>
        </div>
    );
};

export default CatDogPage;