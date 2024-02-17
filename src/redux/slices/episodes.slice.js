import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    episodes: []
};
const slice = createSlice({
    name: 'episodesSLice',
    initialState,
    reducers: {

    }
});
const {reducer: episodesReducer, actions} = slice;

const episodesActions = {
    ...actions
};

export {
    episodesReducer, episodesActions
};