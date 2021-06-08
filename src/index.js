import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

let posts = [
    {id: 1, message: 'Hi', likesCount: 2},
    {id: 2, message: 'Beer', likesCount: 2},
    {id: 3, message: 'I love you', likesCount: 96},
    {id: 4, message: 'Bla-bla-bla', likesCount: 22}
]

let dialogs = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'ROma'},
    {id: 3, name: 'Nika'},
    {id: 4, name: 'Sacha'},
    {id: 5, name: 'Masha'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'I\'m'},
    {id: 3, message: 'Nooc'},
    {id: 4, message: 'Bot'},
    {id: 5, message: 'Lol'},
]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);