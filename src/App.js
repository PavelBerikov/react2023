import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./component/home/Home";
import Albums from "./component/albums/Albums";
import Todo from "./component/todo/Todo";
import Todos from "./component/todos/Todos";
import Comments from "./component/comments/Comments";
import Posts from "./component/Posts/Posts";

const App = () => {
    return (
        <div>
            <div>
                <h3>Menu</h3>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'albums'}>Albums</Link>
                    </li>
                    <li>
                        <Link to={'todos'}>Todos</Link>
                    </li>
                    <li>
                        <Link to={'comments'}>Comments</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'comments'} element={<Comments/>}>
                    <Route path={'post'} element={<Posts/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;