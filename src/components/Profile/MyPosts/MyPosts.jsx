import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (

    <div className={classes.content}>
    <div>
      New post
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
    </div>
    <Post message="Hi" likes="3"/>
    <Post message="Hello! How are you?" likes="5"/>
    <Post message="Lets go" likes="1"/>
    </div>

    )
}

export default MyPosts;