import React from 'react';
import css from './home.css'
import {useNavigate} from "react-router-dom";
const Home = () => {
    let navigate = useNavigate();
    return (
        <div style={{display: "flex", width: '100%', background: "black", justifyContent: 'space-around'}}>
            Home
            <button onClick={() => navigate('users')}>Users</button>
            <button onClick={() => navigate('comments')}>Comments</button>
            <button onClick={() => navigate('cars')}>Cars</button>
        </div>
    );
};

export {Home};