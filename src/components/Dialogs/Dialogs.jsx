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

    let dialogsData = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrew"},
        {id: 3, name: "Slava"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Olga"},
        {id: 6, name: "Sacha"},
        {id: 7, name: "Max"},
    ]

    let messagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello World!"},
        {id: 3, message: "Show me the money"},
        {id: 4, message: "Fine, nice to meet you!"},
        {id: 5, message: "Whats happen?"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />

            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
            </div>
        </div>
    )
}

export default Dialogs;