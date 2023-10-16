import React from 'react';
import {Posts} from "./components/Posts";
import {Comments} from "./components/Comments";
import {Cars} from "./components/Cars";
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import './index.css';

import CatDogsPage from "./components/CatDogsPage";

const App = () => {
    return (
        <div>
            <Link to={'/'}><button className={'home'}>Home</button></Link>
            <div className={'container'}>
                <Link to={'posts'}><button className={'menu'}>Posts</button></Link>
                <Link to={'comments'}><button className={'menu'}>Comments</button></Link>
                <Link to={'cars'}><button className={'menu'}>Cars</button></Link>
            </div>
            <Link to={'cat&dog'}><button className={'catdog'}>Cats and Dogs</button></Link>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'posts'} element={<Posts/>}></Route>
                <Route path={'comments'} element={<Comments/>}></Route>
                <Route path={'cars'} element={<Cars/>}></Route>
                <Route path={'cat&dog'} element={<CatDogsPage/>}/>
            </Routes>
        </div>
    );
};

export default App;

/*використовуючи хук редусер в якому початковий стейт уде масив котів/собак
* реалізувати збереження окремо нового кота та нового собаку приклад на зображенні
* реалізувати видалення для кожного пи натисканні на кнопку делейт*/