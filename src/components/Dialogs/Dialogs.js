import React from "react";

import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Nick</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Lola</div>
                <div className={s.dialog}>Jinjer</div>
                <div className={s.dialog}>Roma</div>
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