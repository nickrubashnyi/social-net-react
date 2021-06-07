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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Nick" id="1"/>
                <DialogItem name="Roma" id="2"/>
                <DialogItem name="Nika" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Masha" id="5"/>
                </div>

            <div className={s.messages}>
                <MessageItem message="Hello" />
                <MessageItem message="I'm" />
                <MessageItem message="noob" />
                <MessageItem message="noob" />
                <MessageItem message="noob" />
            </div>
        </div>
    )
}

export default Dialogs;