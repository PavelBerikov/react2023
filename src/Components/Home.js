import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to={'cars'}>Cars</Link>
            <Outlet/>
        </div>
    );
};

export {Home};