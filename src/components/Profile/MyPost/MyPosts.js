import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (newPostElement) => {
        let text = newPostElement.target.value
        props.dispatch(updateNewPostTextActionCreator(text))

    }

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}
                                  value={props.newPostText}
                                  onChange={onPostChange}/>
                    </div>

                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>

            </div>

        </div>
    )
}


export default MyPosts