import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (

    <div className={classes.content}>
    <div>
      New post
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
    </div>
    <Post />
    </div>

    )
}

export default MyPosts;