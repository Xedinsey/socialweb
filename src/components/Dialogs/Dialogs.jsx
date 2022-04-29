import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Button, Form} from "react-bootstrap";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} key={dialog.id}
                                                                              id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);

    let newMessage = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageBody(text);
    }
    let handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            console.log(e.key)
            props.sendMessage();
        }
    }
    return (
        <>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems} activeClassName={classes.active}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>

            </div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea"
                                  rows={4}
                                  placeholder="Введите текст..."
                                  ref={newMessage}
                                  onChange={onMessageChange}
                                  value={state.newMessageText}
                                  style={{
                                      display: 'block',
                                      width: '500px',
                                  }}
                    />
                </Form.Group>
                <Button
                    onClick={onSendMessageClick}
                    onKeyPress={handleKeyPress}
                >Send message</Button>
            </Form>
        </>
    )
}

export default Dialogs;