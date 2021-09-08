import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onNewMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text))
                };

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state}
                />
            }

        }
    </StoreContext.Consumer>
}

export default DialogsContainer;