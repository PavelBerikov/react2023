import React from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";

const Dogs = ({stateDispatch}) => {
    const {reset, handleSubmit, register} = useForm();
    const [{dogs}, dispatch] = stateDispatch;
    const saveDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog})
        reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(saveDog)}>
                <input type={'text'} placeholder={'dogName'} {...register('name')}/>
                <button>Save</button>
            </form>
            {
                dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)
            }
        </div>
    );
};

export default Dogs;