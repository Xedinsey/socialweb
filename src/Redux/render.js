import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {BrowserRouter} from "react-router-dom";
import {addPost, addMessage, updateNewPostText, updateNewMessageText} from "./state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>, document.getElementById('root'));
};
