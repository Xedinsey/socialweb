import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: "Hi!", likesCount: 12},
    {id: 2, message: "Hello! How are you?", likesCount: 5},
    {id: 3, message: "Lets go", likesCount: 6},
]

let dialogs = [
    {id: 1, name: "Dima"},
    {id: 2, name: "Andrew"},
    {id: 3, name: "Slava"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Olga"},
    {id: 6, name: "Sacha"},
    {id: 7, name: "Max"},
]

let messages = [
    {id: 1, message: "Hi!"},
    {id: 2, message: "Hello World!"},
    {id: 3, message: "Show me the money"},
    {id: 4, message: "Fine, nice to meet you!"},
    {id: 5, message: "Whats happen?"},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
