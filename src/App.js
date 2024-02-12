import React from 'react';
import {Home} from "./Components/Home";
import {Link, Route, Routes} from "react-router-dom";
import {Cars, Users} from "./Components";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
