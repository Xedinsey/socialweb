import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts= [
        {id: 1, message: "Hi!", likesCount: 12},
        {id: 2, message: "Hello! How are you?", likesCount: 5},
        {id: 3, message: "Lets go", likesCount: 6},
    ]

    let postsElement = posts.map( p => <Post message={p.message} likes={p.likesCount}/>);

    return (

        <div className={classes.postsBlock}>
            <h2>New post</h2>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>

    )
}

export default MyPosts;