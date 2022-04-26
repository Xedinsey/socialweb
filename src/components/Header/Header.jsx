import React from 'react';
import classes from './Header.module.css';
import img from "./logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src={img} alt="лого"/>
        <span>Onk-Onk</span>
        <div className={classes.login__block}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}

export default Header;