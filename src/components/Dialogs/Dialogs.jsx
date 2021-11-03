import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} key = {dialog.id} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageBody(text);
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
                        placeholder="Введите текст..."
                        ref={newMessage}
                        onChange={onMessageChange}
                        value={state.newMessageText}
                    />
                </div>
                <div className={classes.button}>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;