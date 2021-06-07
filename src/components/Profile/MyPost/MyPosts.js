import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi', likesCount: 2},
        {id: 2, message: 'Beer', likesCount: 2},
        {id: 3, message: 'I love you', likesCount: 96},
        {id: 4, message: 'Bla-bla-bla', likesCount: 22}
]

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
                    <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                    <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
                    <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
                    <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
                </div>

            </div>

        </div>
    )
}

export default MyPosts