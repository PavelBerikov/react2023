import React from 'react';
import {Users} from "./Users";
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'users'}>Users</Link>
                </li>
                <li>
                    <Link to={'cars'}>Cars</Link>
                </li>
                <li>
                    <Link to={'comments'}>Comments</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export {Home};