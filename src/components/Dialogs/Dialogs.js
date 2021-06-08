import React from "react";

import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogItem";
import MessageItem from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.state.messages
        .map( m => <MessageItem message={m.message}/>)

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
                {messageElements}
                <textarea ref={NewMessageText}></textarea>
                <button onClick={AddMessage}>Click</button>
            </div>
        </div>
    )
}

export default Dialogs;