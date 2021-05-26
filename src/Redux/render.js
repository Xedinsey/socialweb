import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {BrowserRouter} from "react-router-dom";
import {addPost, addMessage} from "./state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
};
