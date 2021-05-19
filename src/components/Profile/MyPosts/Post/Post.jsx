import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
    <div>
        <div className={classes.avatar}>
            <img src="https://a.d-cd.net/1a424f2s-960.jpg" />
        </div>
        {props.message}
        <div>
            <span>Likes: {props.likes}</span>
        </div>
    </div>
    )
}

export default Post;