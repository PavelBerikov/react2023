import React from 'react';
import {Home} from "./Components/Home";
import {Route, Routes} from "react-router-dom";
import {Cars} from "./Components";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
