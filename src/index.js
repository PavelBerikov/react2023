import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);
export const Context1 = createContext(null);
const value1 = [1,2,3];
const value = {d: 1};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context1.Provider value={value1}>
        <Context.Provider value={value}>
        <App/>
    </Context.Provider>
    </Context1.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
