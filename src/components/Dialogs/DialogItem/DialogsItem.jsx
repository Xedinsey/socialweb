import React from "react";
import classes from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/id=" + props.id;
    return (
        <div>
            <NavLink to={path} className={classes.dialog + " " + classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;