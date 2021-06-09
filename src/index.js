import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import state from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <App state={state} addPost={addPost()}/>
        </React.StrictMode>,
        document.getElementById('root')
    </BrowserRouter>
);