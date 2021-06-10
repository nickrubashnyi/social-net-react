import React from 'react'
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import {addPost, updateNewPostText} from "./redux/state";
import App from "./App";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
