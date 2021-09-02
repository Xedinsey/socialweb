import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi!", likesCount: 12},
                {id: 2, message: "Hello! How are you?", likesCount: 5},
                {id: 3, message: "Lets go", likesCount: 6},
            ],
            newPostText: "",
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello World!"},
                {id: 3, message: "Show me the money"},
                {id: 4, message: "Fine, nice to meet you!"},
                {id: 5, message: "Whats happen?"},
            ],
            newMessageText: "",
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};


window.store = store;
export default store;