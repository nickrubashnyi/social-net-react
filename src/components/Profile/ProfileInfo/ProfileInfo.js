import React from 'react'

import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://oecdenvironmentfocusblog.files.wordpress.com/2020/06/wed-blog-shutterstock_1703194387_low_nwm.jpg?w=640"
                    alt="nature"/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar+desc
            </div>
        </div>
    )
}
export default ProfileInfo

