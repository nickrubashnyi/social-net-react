import React from 'react'

import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let NewPostElement = React.createRef();

    let addPost = () => {
        let text = NewPostElement.current.value;
        props.addPost(text);
        NewPostElement.current.value = '';
    }

    return (
        <div className={s.content}>

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea ref={ NewPostElement }></textarea></div>

                    <div>
                        <button onClick={ addPost }>Add post</button>
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