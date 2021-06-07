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
    let dialogsData = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'ROma'},
        {id: 3, name: 'Nika'},
        {id: 4, name: 'Sacha'},
        {id: 5, name: 'Masha'},
    ]
    let messagessData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I\'m'},
        {id: 3, message: 'Nooc'},
        {id: 4, message: 'Bot'},
        {id: 5, message: 'Lol'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagessData[0].message}/>
                <Message message={messagessData[1].message}/>
                <Message message={messagessData[2].message}/>
                <Message message={messagessData[3].message}/>

            </div>
        </div>
    )
}

export default Dialogs;