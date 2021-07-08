const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT_ACTION_CREATOR = 'UPDATE-NEW-POST-TEXT-ACTION-CREATOR';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT_ACTION_CREATOR, newText: text,});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

window.store = store;
export default store;