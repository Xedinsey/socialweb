import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/id=" + props.id;
    return (
        <div>
            <NavLink to={path} className={classes.dialog + " " + classes.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                <DialogItem name="Dima" id="1" />
                <DialogItem name="Sveta" id="2" />
                <DialogItem name="Max" id="3" />
                <DialogItem name="Alexey" id="4" />
                <DialogItem name="Oleg" id="5" />
                <DialogItem name="Lena" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="Hello!" />
                <Message message="How are you?" />
                <Message message="Fine, thanks, and you?" />
            </div>
        </div>
    )
}

export default Dialogs;