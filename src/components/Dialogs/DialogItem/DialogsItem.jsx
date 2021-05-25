import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/id=" + props.id;
    return (
        <div>
            <NavLink to={path} className={classes.dialog + " " + classes.active}>{props.name}</NavLink>
            <div>
                <img
                    src='https://cs8.pikabu.ru/avatars/2527/x2527106-1185259896.png'
                    alt="Аватарка"/>
            </div>
        </div>
    )
}

export default DialogsItem;