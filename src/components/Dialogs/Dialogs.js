import React from "react";

import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {

    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'ROma'},
        {id: 3, name: 'Nika'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Masha'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I\'m'},
        {id: 3, message: 'Nooc'},
        {id: 4, message: 'Bot'},
        {id: 5, message: 'Lol'},
    ]

    let dialogsElements = dialogs
        .map( d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = messages
        .map( m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;