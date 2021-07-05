import React from 'react'


import s from './Dialogs.module.css'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map((item) => <DialogItem name={item.name} id={item.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message}/>)

    let AddMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }


    const OnMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={state.newMessageText}
                          onChange={OnMessageChange}
                />
                <button onClick={AddMessage}>Click</button>
            </div>
        </div>
    )
}

export default Dialogs