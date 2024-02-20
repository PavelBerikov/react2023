import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Cars, Comments, Home, Users} from "./components";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
