import React from 'react';
import {Outlet} from "react-router-dom";
import {Home} from "../components/home/Home";

const MainLayout = () => {
    return (
        <div>
            <Home/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};