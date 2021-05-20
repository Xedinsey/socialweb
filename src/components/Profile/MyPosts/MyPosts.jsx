import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: "Hi!", likesCount: 12},
        {id: 2, message: "Hello! How are you?", likesCount: 5},
        {id: 3, message: "Lets go", likesCount: 6},

    ]

    return (

        <div className={classes.postsBlock}>
            <h2>New post</h2>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likes={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likes={postsData[2].likesCount}/>
            </div>
        </div>

    )
}

export default MyPosts;