import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (

        <div className={classes.postsBlock}>
            <h2>New post</h2>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi" likes="3"/>
                <Post message="Hello! How are you?" likes="5"/>
                <Post message="Lets go" likes="1"/>
            </div>
        </div>

    )
}

export default MyPosts;