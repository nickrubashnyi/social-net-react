import React from "react";

import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Nick</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Lola</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Jinjer</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Roma</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>I'm</div>
                <div className={s.message}>noob</div>
            </div>
        </div>
    )
}

export default Dialogs;