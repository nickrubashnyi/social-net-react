import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>

                    <div>
                        <button>Add post</button>
                    </div>
                    <div>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='hello first post' likesCount='15'/>
                    <Post message='Hello, it`s a second post))' likesCount='25'/>
                </div>

            </div>

        </div>
    )
}

export default MyPosts