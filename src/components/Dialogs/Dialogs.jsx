import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);
    let newMessage = React.createRef();
    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});
    };
    let onMessageChange = () => {
        let text = newMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text};
        props.dispatch(action);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} activeClassName={classes.active}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <div className={classes.textarea}>
                    <textarea
                        ref={newMessage}
                        onChange={onMessageChange}
                        value={props.dialogsPage.newMessageText}
                    />
                </div>
                <div className={classes.button}>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;