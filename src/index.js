import store from "./Redux/redux-store";
import React from 'react';
/*import ReactDOM from 'react-dom';*/ // Для реакта до 17 версии
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from "react-dom/client";

// для реакта от 18 версии и выше
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);


// Для реакта до 17 версии
// ReactDOM.render(
//     <BrowserRouter>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     </BrowserRouter>, container);




