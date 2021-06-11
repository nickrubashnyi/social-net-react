import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages
        .map(m => <MessageItem message={m.message}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let NewMessageText = React.createRef()
    let AddMessage = () => {
        let mesText = NewMessageText.current.value
        alert(mesText)
        NewMessageText.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message: '/></div>
                        <div>
                            <button onClick={onSendMessageClick}></button>
                        </div>
                    </div>
                </div>
                <textarea ref={NewMessageText}/>
                <button onClick={AddMessage}>Click</button>
            </div>
        </div>
    )
}

export default Dialogs;