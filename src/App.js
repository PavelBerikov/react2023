import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Cars, Comments, Users} from "./components";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'cars'} element={<Cars/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'comments'} element={<Comments/>}/>
            </Route>
        </Routes>
    );
};

export default App;