import React from 'react';
import classes from './Header.module.css';
import img from "./logo.png";

const Header = (props) => {
    return <header className={classes.header}>
        <img src={img} alt="лого"/>
        <span>Onk-Onk</span>
    </header>
}

export default Header;