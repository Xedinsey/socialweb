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

    let dialogsElement = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;