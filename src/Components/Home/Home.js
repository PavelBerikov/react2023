import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Posts} from "../Posts";
import {Comments} from "../Comments";
import CatDogPage from "../CatDog/CatDogPage";

const Home = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to={'posts'} style={{color: 'red'}}>Posts</Link>
                <Link to={'comments'} style={{color: 'red'}}>Comments</Link>
                <Link to={'cat&dogs'} style={{color: 'red'}}>Cat and Dogs</Link>
            </div>
            <div>
                <Routes>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                    <Route path={'cat&dogs'} element={<CatDogPage/>}/>
                </Routes>
            </div>
        </>

    );
};

export default Home;