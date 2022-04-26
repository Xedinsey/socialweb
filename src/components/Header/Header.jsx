import React from 'react';
import classes from './Header.module.css';
import img from "./logo.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={classes.header}>
        <img src={img} alt="лого"/>
        <span>Onk-Onk</span>
        {props.isAuth
            ? <div className={classes.login_name}><div>{props.login}</div></div>
            : <div className={classes.login__block}><NavLink to={'/login'}>Login</NavLink></div>
        }

    </header>
}

export default Header;