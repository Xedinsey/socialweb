import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likes={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={classes.postsBlock}>
            <h2>New post</h2>
            <div>
                <div><textarea
                    placeholder="Введите текст..."
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;