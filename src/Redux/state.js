import {rerenderEntireTree} from "./render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi!", likesCount: 12},
            {id: 2, message: "Hello! How are you?", likesCount: 5},
            {id: 3, message: "Lets go", likesCount: 6},
        ],
        newPostText: "Введите текст..."
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "Hello World!"},
            {id: 3, message: "Show me the money"},
            {id: 4, message: "Fine, nice to meet you!"},
            {id: 5, message: "Whats happen?"},
        ],
        newMessageText: "Введите текст...",
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Slava"},
            {id: 4, name: "Sveta"},
            {id: 5, name: "Olga"},
            {id: 6, name: "Sacha"},
            {id: 7, name: "Max"},
        ],

    },
    sidebar: {},
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};
export let addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}
export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;